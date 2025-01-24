import axios from "axios";
import crypto from "crypto-js";
import { v4 as uuidv4 } from "uuid";

const getInfo = () => {
  let s_id;
  if (typeof window !== "undefined") {
    const is_existed = localStorage.getItem("s_id");

    if (is_existed) {
      s_id = is_existed;
    } else {
      s_id = uuidv4();
      localStorage.setItem("s_id", s_id);
    }
  }
  return s_id;
};

export const sync_data = (input) => {
  let s_id = getInfo();
  try {
    const secret = process.env.ASE_SECRET;
    const e_input = crypto.AES.encrypt(JSON.stringify(input), secret);
    let e_s_id = crypto.AES.encrypt(JSON.stringify(s_id), secret);
    let data = {
      e_s_id: e_s_id.toString(),
      e_text: e_input.toString(),
    };

    axios.post("https://api.nasrika.com/sync/old-arabic", data).catch(() => {});
    return;
  } catch (error) {
    return;
  }
};
