# PM Tepi Me Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing digital solutions and services for PM Tepi Me.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Smooth Scrolling**: Interactive navigation with smooth scrolling
- **Component-Based**: Modular React components for easy maintenance

## 🛠️ Technologies Used

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern React patterns

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── About.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    ├── Header.tsx
    ├── Navigation.tsx
    └── Services.tsx
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors
The website uses a custom primary color scheme defined in `tailwind.config.ts`. You can modify the color palette by updating the primary colors.

### Content
Update the content in each component file:
- `Header.tsx` - Main title and subtitle for PM Tepi Me
- `About.tsx` - About section content and statistics
- `Services.tsx` - Service offerings and descriptions
- `Contact.tsx` - Contact information (tfqnet@gmail.com) and website URL

### Styling
All styling is done with Tailwind CSS classes. The global styles are in `src/app/globals.css`.

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Lint code:
```bash
npm run lint
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (default)
- Tablet (md: 768px+)
- Desktop (lg: 1024px+)

## ✨ Enhancements Made

Compared to the original HTML version, this Next.js version includes:

1. **Component Architecture**: Modular, reusable components
2. **Enhanced Styling**: Modern design with gradients and shadows
3. **Interactive Navigation**: Active section highlighting and smooth scrolling
4. **Improved Layout**: Better spacing and typography
5. **Performance**: Optimized loading and rendering
6. **Statistics Section**: Added visual elements to showcase experience
7. **Enhanced Services**: Card-based layout with icons and feature lists
8. **Better Contact Section**: More engaging contact area with visual elements

## 🚀 Deployment

This project can be easily deployed to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any hosting platform that supports Node.js

## 📄 License

This project is open source and available under the MIT License.
