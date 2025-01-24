# Old Arabic Text Converter

A Next.js web application that converts modern Arabic text to classical Arabic script without diacritical marks and certain dot-based letters.

## Features

- Real-time conversion of modern Arabic text to classical style
- Removes diacritical marks (tashkeel)
- Converts dotted letters to their undotted variants
- Copy converted text to clipboard
- Mobile-responsive interface
- Dark theme UI with Tailwind CSS

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

- 

index.js

 - Main application page
- 

text.handler.js

 - Text conversion logic
- 

globals.css

 - Global styles with Tailwind
- 

tailwind.config.js

 - Tailwind configuration

## Environment Variables

Configuration is in 

next.config.js

. Create a 

.env.local

 file for local environment variables.

## Contributing

Feel free to open issues and pull requests to improve the application.

## License

Private - See 

package.json