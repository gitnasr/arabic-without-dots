# Old Arabic Text Converter

A Next.js web application that converts modern Arabic text to classical Arabic script without diacritical marks and certain dot-based letters.

## Features

- ✨ Real-time text conversion
- 🔄 Modern to classical Arabic transformation
- ❌ Diacritical marks removal
- 📋 Copy to clipboard functionality
- 📱 Responsive design
- 🌙 Dark theme interface

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Simple Snackbar](https://www.npmjs.com/package/react-simple-snackbar) - Notifications

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000)

## Production

Build and start the production server:
```bash
npm run build
npm run start
```

## Project Structure
```
├── pages/
│   ├── _app.js
│   └── index.js
├── lib/
│   └── text.handler.js
├── styles/
│   └── globals.css
└── config/
    └── tailwind.config.js
```

## Contributing

Feel free to open issues and pull requests to improve the application.

