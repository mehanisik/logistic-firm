# Atik Import Export

A modern web application for Atik Import Export, a leading logistics and import/export company.


## Features

- 🌐 Multi-language support (English/Turkish)
- 📱 Responsive design
- 📧 Contact form with email notifications
- 🎨 Modern UI with shadcn/ui components
- ⚡ Built with Next.js 14
- 🔒 Rate-limited API endpoints
- 📬 Professional email templates

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Tabler Icons](https://tabler-icons.io/)
- **Deployment:** [Vercel](https://vercel.com)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/atik-import-export.git
   cd atik-import-export
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

  

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── [locale]/       # Internationalization
│   └── api/            # API routes
├── components/         # React components
│   ├── ui/            # UI components
│   ├── forms/         # Form components
│   └── landing/       # Landing page components
├── styles/            # Global styles
└── constants/         # Constants and configurations
```

## Contact Form

The contact form system includes:
- Client-side validation with Zod
- Rate-limited API endpoint
- Professional email templates
- Automatic notifications to both company and sender

![Atik Import Export](public/website.png)
