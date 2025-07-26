# Delight Your Mind

A collection of AI-powered therapeutic agents designed to help you navigate different emotional states and mental challenges.

## Project Overview

Delight Your Mind features four unique AI companions, each specialized in different aspects of mental wellness:

- **Overthinking Buddy** 🌪️ - Your gentle companion for taming thought spirals and managing anxiety
- **Vibesmith** 🎨 - The creative architect of emotions who helps transform and elevate your mood
- **Void Whisperer** 🌌 - A mystical counselor for exploring deep emotions and finding wisdom in darkness
- **MoodFrog** 🐸 - A playful friend who helps you hop out of bad moods with joy and humor

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.
- [Install Node.js with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   ```

2. **Navigate to the project directory**
   ```sh
   cd delight-your-mind
   ```

3. **Install dependencies**
   ```sh
   npm install
   ```

4. **Start the development server**
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Technology Stack

This project is built with modern web technologies:

- **React** - UI library for building interactive interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui** - High-quality UI components
- **Google Gemini AI** - Advanced AI model for generating therapeutic responses

## Features

- **Real-time AI conversations** with specialized therapeutic agents
- **Responsive design** that works on desktop and mobile devices
- **Modern UI/UX** with smooth animations and professional styling
- **Privacy-focused** - conversations are not stored permanently
- **Accessible design** following modern UX principles

## Configuration

### API Setup

1. Get a Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Update the API key in `src/services/geminiService.ts`

```typescript
const apiKey = "YOUR_GEMINI_API_KEY_HERE";
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/
│   └── agents/         # Individual agent pages
├── services/           # API services (Gemini integration)
├── config/             # Agent personalities and configuration
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with automatic builds on every push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### Manual Deployment

```sh
npm run build
# Upload the dist/ folder to your hosting provider
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) section
2. Create a new issue with detailed information
3. Contact the development team

---

**Built with ❤️ for mental wellness and emotional support**
