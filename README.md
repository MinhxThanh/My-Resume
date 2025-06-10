# My Resume - Interactive Portfolio Website

<img width="1191" alt="Screenshot 2025-06-10 at 16 00 26" src="https://github.com/user-attachments/assets/80ae214f-62b4-4047-9b76-92e8af1cac3a" />

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, dark mode support, and an interactive 3D background.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all device sizes
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Elements**: Animated components and 3D shader background
- **Performance Optimized**: Built with Vite for fast loading times
- **TypeScript**: Full type safety throughout the codebase
- **Accessibility**: Built with accessibility best practices

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: GitHub Pages

## 🚀 Live Demo

Visit the live website: [https://minhxthanh.github.io/My-Resume](https://minhxthanh.github.io/My-Resume)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MinhxThanh/My-Resume.git
cd My-Resume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Experience.tsx  # Work experience
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation menu
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and constants
```

## ⚙️ Configuration

### Vite Configuration
The project uses Vite with the following key configurations:
- React plugin for JSX support
- Path aliases (`@` for `src/`)
- Optimized for GitHub Pages deployment

### Tailwind CSS
Configured with custom theme extensions and responsive design utilities.

### TypeScript
Strict TypeScript configuration with path mapping and modern ES features.

## 🎨 Customization

### Personal Information
Update your personal information in `src/utils/constants.ts`:
- Name and title
- Contact information
- Social media links
- Resume content

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Components
Each section of the resume is built as a separate component:
- `Hero.tsx` - Landing section with introduction
- `About.tsx` - About me section
- `Experience.tsx` - Work experience timeline
- `Skills.tsx` - Technical skills showcase
- `Projects.tsx` - Portfolio projects
- `Contact.tsx` - Contact form and information

## 🌙 Dark Mode

The website includes a dark mode toggle that:
- Saves user preference in localStorage
- Automatically detects system preference
- Smoothly transitions between themes

## 📱 Responsive Design

The layout is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🚀 Deployment

The project is configured for automatic deployment to GitHub Pages:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at `https://minhxthanh.github.io/My-Resume`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- 3D effects using [Three.js](https://threejs.org/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
