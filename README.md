# OLogVisualizer

A modern web application built with React and Vite to visualize and understand algorithm time complexities (Big O notation) through interactive animations and visual representations.

## Overview

OLogVisualizer helps developers and students understand algorithmic complexity by providing real-time visualizations of how different algorithms perform as input size grows. The project demonstrates various Big O complexities including O(1), O(log n), O(n), O(n log n), O(n²), and O(2ⁿ) through interactive charts and animations.

## Features

- **Interactive Visualizations**: Real-time graphical representations of algorithm complexities
- **Multiple Complexity Classes**: Visual comparison of common Big O notations
- **Responsive Design**: Optimized for desktop and mobile viewing experiences
- **Fast Development**: Built with Vite for lightning-fast HMR (Hot Module Replacement)
- **Modern React**: Utilizes latest React patterns and best practices

## Tech Stack

- **React**: Frontend UI library for building interactive user interfaces
- **Vite**: Next-generation frontend build tool for faster development
- **JavaScript**: Primary programming language (87.4%)
- **CSS**: Styling and animations (8.3%)
- **HTML**: Markup structure (4.3%)

## Live Demo

Visit the live application at: [o-log-visualizer.vercel.app](https://o-log-visualizer.vercel.app)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sahilsaini172/OLogVisualizer.git
cd OLogVisualizer
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

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
OLogVisualizer/
├── src/
│   ├── components/     # React components
│   ├── assets/         # Static assets
│   ├── styles/         # CSS files
│   └── App.jsx         # Main application component
├── public/             # Public static files
├── index.html          # Entry HTML file
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

## Development

This project uses Vite's official React plugin with Fast Refresh for an optimal development experience. The setup includes:

- **@vitejs/plugin-react**: Uses Babel for Fast Refresh
- **ESLint**: Code quality and consistency checks

### Expanding ESLint Configuration

For production applications, consider enabling TypeScript with type-aware lint rules. This provides enhanced type safety and catches more potential errors during development.

## Deployment

The application is deployed on Vercel, providing seamless continuous deployment from the GitHub repository. Any push to the main branch automatically triggers a new deployment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

**Sahil Saini** - [sahilsaini172](https://github.com/sahilsaini172)

## Acknowledgments

- Built with React and Vite for modern web development
- Inspired by the need to make algorithm complexity concepts more accessible and visual
- Thanks to the open-source community for their invaluable tools and libraries

---

⭐ Star this repository if you find it helpful!
