const FATHATAN = "\u064b";
const DAMMATAN = "\u064c";
const KASRATAN = "\u064d";
const DAMMA = "\u064f";
const FATHA = "\u064e";
const KASRA = "\u0650";
const SHADDA = "\u0651";
const SUKUN = "\u0652";
const TASHKEEL = [
  FATHATAN,
  DAMMATAN,
  KASRATAN,
  FATHA,
  DAMMA,
  KASRA,
  SUKUN,
  SHADDA,
];

let LETTERS_DICT = {
  ا: "ا",
  أ: "ا",
  إ: "ا",
  آ: "ا",
  ء: "",
  ب: "ٮ",
  پ: "ٮ",
  ت: "ٮ",
  ث: "ٮ",
  ج: "ح",
  چ: "ح",
  خ: "ح",
  ح: "ح",
  د: "د",
  ذ: "د",
  ر: "ر",
  ز: "ر",
  ژ: "ر",
  س: "س",
  ش: "س",
  ص: "ص",
  ض: "ص",
  ط: "ط",
  ظ: "ط",
  ع: "ع",
  غ: "ع",
  ف: "ڡ",
  ڤ: "ڡ",
  ق: "ٯ",
  ك: "ک",
  گ: "ک",
  ل: "ل",
  م: "م",
  ن: "ں",
  ه: "ه",
  و: "و",
  ؤ: "و",
  ة: "ه",
  ى: "ى",
  ي: "ى",
  ئ: "ى",
};
let letters = [
  "ا",
  "أ",
  "إ",
  "آ",
  "ء",
  "ب",
  "پ",
  "ت",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ڤ",
  "ق",
  "ك",
  "گ",
  "ل",
  "م",
  "ن",
  "ه",
  "ة",
  "و",
  "ؤ",
  "ي",
  "ى",
  "ئ",
];

function strip_tashkeel(text) {
  if (text == null) {
    return text;
  }

  for (const char in TASHKEEL) {
    try {
      text = text.replaceAll(TASHKEEL[char], "");
    } catch (err) {
      text = replaceAll(TASHKEEL[char], "", text);
    }
  }
  return text;
}

function old_arabic_script(sentence) {
  sentence = strip_tashkeel(sentence);
  var new_sentence = "";
  let sentence_len = sentence.length;
  for (let letter = 0; letter < sentence_len; letter++) {
    if (!letters.includes(sentence[letter])) {
      new_sentence += sentence[letter];
    } else {
      new_sentence += LETTERS_DICT[sentence[letter]];
      if (sentence[letter] == "ن") {
        var next_letter = letter + 1;
        if (next_letter < sentence_len) {
          var temp = new_sentence.substring(0, new_sentence.length - 1);
          if (letters.includes(sentence[next_letter])) {
            temp += LETTERS_DICT["ب"];
            new_sentence = temp;
          }
        }
      }
    }
  }
  return strip_tashkeel(new_sentence);
}

export function convertText(text) {
  let value = text;

  if (value != "" && !/^[a-zA-Z]+$/.test(value)) {
    return old_arabic_script(value);
  }
}

