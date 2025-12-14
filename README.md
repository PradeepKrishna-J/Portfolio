# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and mobile-optimized sticky navigation.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Sticky Section Headers**: Smart sticky navigation on mobile with viewport-aware shadow effects
- **Interactive Projects Showcase**: Filterable projects by category (AI/ML, Web Development, Research)
- **Experience Timeline**: Visual timeline of professional experience and internships
- **Contact Form**: Easy-to-use contact form with social media links
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Linting**: ESLint

## 📦 Installation

```bash
# Clone the repository
git clone git@github.com:PradeepKrishna-J/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

## 🔧 Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Mobile Features

- **Sticky Section Titles**: On mobile devices, section titles (Projects, Experience, Endorsements, Contact) become sticky when scrolling
- **Smart Shadow Effects**: Shadows appear only when titles are stuck at the top and disappear when scrolling back to the original position
- **Viewport Detection**: Uses IntersectionObserver API to detect when elements enter/exit the viewport
- **Responsive Breakpoints**: Tailwind's `md:` breakpoint (768px) switches between mobile and desktop behaviors

## 📂 Project Structure

```
portofolio/
├── src/
│   ├── components/       # React components
│   │   ├── Contact.tsx
│   │   ├── Endorsements.tsx
│   │   ├── Experience.tsx
│   │   ├── ExperienceLanding.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Projects.tsx
│   │   └── ProjectsLanding.tsx
│   ├── data/            # Data files
│   │   ├── experience.ts
│   │   └── projects.ts
│   ├── hooks/           # Custom React hooks
│   │   └── useSticky.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Projects**: Edit `src/data/projects.ts` to add/modify projects
2. **Experience**: Edit `src/data/experience.ts` to update work experience
3. **Contact Info**: Update email and social links in `src/components/Contact.tsx`
4. **Endorsements**: Modify testimonials in `src/components/Endorsements.tsx`

### Styling

- Color scheme can be adjusted in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes

## 🌐 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Import project and deploy with one click
- **GitHub Pages**: Use `gh-pages` package for deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production-ready files
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pradeep Krishna J**

- GitHub: [@PradeepKrishna-J](https://github.com/PradeepKrishna-J)
- LinkedIn: [jpradeepkrishna](https://www.linkedin.com/in/pradeepkrishna-j/)

## 🙏 Acknowledgments

- Built with modern web technologies and best practices
- Icons provided by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
