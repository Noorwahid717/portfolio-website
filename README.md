# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TailwindCSS featuring smooth animations and interactive components.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations using Framer Motion
- **Interactive**: Interactive components and hover effects
- **Fast**: Built with Next.js for optimal performance
- **Accessible**: SEO-friendly with proper meta tags
- **Dark/Light Mode**: Toggle between dark and light themes

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and custom CSS
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Header.tsx       # Navigation header with theme toggle
│   ├── Hero.tsx         # Hero section with typing animation
│   ├── About.tsx        # About section with features
│   ├── Projects.tsx     # Projects showcase with filters
│   ├── Skills.tsx       # Skills with animated progress bars
│   ├── Contact.tsx      # Contact form and information
│   └── Footer.tsx       # Footer with social links
└── .github/
    └── copilot-instructions.md  # Development guidelines
```

## 🎨 Customization

### Personal Information
Update the following components with your personal information:

- **Hero.tsx**: Name, title, description, and social links
- **About.tsx**: Bio, features, and statistics
- **Projects.tsx**: Your projects with descriptions and links
- **Skills.tsx**: Your technical skills and tools
- **Contact.tsx**: Your contact information
- **layout.tsx**: Meta tags and SEO information

### Styling
- Modify `globals.css` for global styles
- Update TailwindCSS classes in components
- Customize colors in the gradient backgrounds

### Content
- Add your project images to `public/` folder
- Update project data in `Projects.tsx`
- Modify skill categories and levels in `Skills.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 🎯 Features in Detail

### Responsive Navigation
- Mobile-friendly hamburger menu
- Smooth scroll to sections
- Dark/light mode toggle

### Animated Hero Section
- Typing animation effect
- Gradient text effects
- Call-to-action buttons

### Interactive Projects
- Project filtering by category
- Hover animations
- External links to demos and code

### Skills Visualization
- Animated progress bars
- Categorized skill groups
- Tool and technology icons

### Contact Form
- Form validation
- Interactive design
- Social media links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out.

---

**Made with ❤️ using Next.js and TailwindCSS**
