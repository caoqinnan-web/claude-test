# Personal Portfolio Website

A modern, responsive personal portfolio website built with **Next.js 15** and **TailwindCSS**. Features a clean design with dark/light mode support and smooth animations.

## 🚀 Features

- ✨ **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and TailwindCSS
- 🌓 **Dark/Light Mode**: Seamless theme switching with next-themes
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Optimized with Next.js App Router and Server Components
- 🎨 **Beautiful UI**: Clean and professional design with smooth animations
- 📝 **Blog System**: Ready-to-use blog with markdown-like content support
- 🔍 **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── blog/                # Blog listing and article pages
│   │   └── [slug]/         # Dynamic blog post pages
│   ├── services/            # Services overview and detail pages
│   │   ├── web-development/
│   │   ├── ui-ux-design/
│   │   ├── api-development/
│   │   └── consulting/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind directives
├── components/              # Reusable React components
│   ├── Footer.tsx          # Footer component
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── ThemeProvider.tsx   # Theme context provider
│   └── ThemeToggle.tsx     # Dark/light mode toggle button
├── lib/                     # Utility functions and data
│   └── blog-data.ts        # Blog posts data and utilities
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
└── package.json            # Project dependencies and scripts
```

## 📂 Folder Descriptions

### `/app`
Contains all application pages and routes using Next.js App Router:
- **Home**: Landing page with hero section and feature highlights
- **About**: Personal information, skills, and experience timeline
- **Services**: Service offerings with 4 detailed sub-pages
- **Blog**: Blog listing page and dynamic article pages

### `/components`
Reusable UI components:
- **Navbar**: Navigation bar with responsive menu and theme toggle
- **Footer**: Site footer with links and social media
- **ThemeProvider**: Wrapper for theme context
- **ThemeToggle**: Button component for switching themes

### `/lib`
Utility functions and data:
- **blog-data.ts**: Blog posts data structure and helper functions (to be replaced with Notion API later)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark/light mode support
- **Deployment**: Ready for [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any Node.js host

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd claude-test
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Update Personal Information

1. **Navigation & Footer**: Edit text and links in `components/Navbar.tsx` and `components/Footer.tsx`
2. **Home Page**: Customize content in `app/page.tsx`
3. **About Page**: Update your information in `app/about/page.tsx`
4. **Services**: Modify service offerings in `app/services/page.tsx`

### Customize Theme Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add more custom colors
    },
  },
}
```

### Add Blog Posts

Currently, blog posts are stored in `lib/blog-data.ts`. To add a new post:

1. Add a new object to the `blogPosts` array
2. Follow the `BlogPost` interface structure

**Future Enhancement**: Replace this with Notion API integration for easier content management.

## 🔮 Future Enhancements

- [ ] Integrate Notion API for blog content management
- [ ] Add contact form with email integration
- [ ] Implement newsletter subscription
- [ ] Add projects/portfolio showcase section
- [ ] Integrate analytics (Google Analytics, Plausible, etc.)
- [ ] Add animations with Framer Motion
- [ ] Implement search functionality for blog posts
- [ ] Add RSS feed for blog
- [ ] Implement comment system for blog posts

## 📄 Pages Overview

### Home (`/`)
- Hero section with introduction
- Feature highlights with icons
- Call-to-action section

### About (`/about`)
- Personal story and bio
- Skills categorized by frontend, backend, and tools
- Professional experience timeline

### Services (`/services`)
- Overview of services offered
- 4 detailed service pages:
  - Web Development
  - UI/UX Design
  - API Development
  - Technical Consulting

### Blog (`/blog`)
- Blog post listing with categories
- Individual article pages with full content
- Newsletter subscription section (UI only)

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

### Deploy to Other Platforms

This project can be deployed to any platform that supports Node.js:

- **Netlify**: Connect your Git repository
- **Railway**: Deploy with one click
- **DigitalOcean App Platform**: Deploy from GitHub
- **AWS Amplify**: Connect your repository

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliant with WCAG 2.1

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

**Your Name**

- Website: [your-website.com](https://your-website.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js and TailwindCSS
