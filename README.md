# Portfolio Website

A modern, responsive portfolio website built with React and Vite. This interactive site showcases projects, skills, and provides GitHub statistics.

## Features

- **Home Section** - Hero section with introduction
- **About & Skills** - Display your expertise and technical skills
- **Projects** - Showcase your work with project details
- **GitHub Stats** - Display GitHub statistics and contributions
- **Contact** - Get in touch with visitors
- **Loading Screen** - Professional loading animation
- **Responsive Design** - Fully optimized for mobile and desktop
- **Fast Performance** - Built with Vite for optimal build speed

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **CSS** - Styling
- **JavaScript (ES6+)** - Programming language

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Home.jsx            # Hero section
│   ├── AboutSkills.jsx     # About & skills section
│   ├── Project.jsx         # Projects showcase
│   ├── GithubStats.jsx     # GitHub statistics
│   ├── Contact.jsx         # Contact section
│   ├── Footer.jsx          # Footer
│   └── LoadingScreen.jsx   # Loading animation
├── assets/                 # Images and media files
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css              # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Configuration

- **Vite Config** - See [vite.config.js](vite.config.js) for build configuration
- **ESLint** - See [eslint.config.js](eslint.config.js) for linting rules

## Customization

To customize the portfolio:

1. **Update Header/Navigation** - Edit [components/Header.jsx](src/components/Header.jsx)
2. **Modify Content** - Update each component with your own information
3. **Change Styling** - Edit [index.css](src/index.css) or component-specific styles
4. **Update GitHub Stats** - Configure the GitHub username in [components/GithubStats.jsx](src/components/GithubStats.jsx)

## Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

## Deployment

The portfolio can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback about this portfolio template, feel free to reach out!
