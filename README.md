# 🎨 React.js, JSX, and Tailwind CSS – Mastering Front-End Development

A modern React application demonstrating component architecture, state management, hooks usage, and API integration with beautiful Tailwind CSS styling.

## 🚀 Features

### ✅ Task 1: Component Architecture
- **Button Component**: Multiple variants (primary, secondary, danger, success, warning) with different sizes
- **Card Component**: Flexible content display with variants (default, outlined, elevated) and hover effects
- **Navbar Component**: Responsive navigation with theme toggle and mobile menu
- **Footer Component**: Comprehensive footer with links, social media, and copyright information
- **Layout Component**: Wrapper component that includes Navbar and Footer

### ✅ Task 2: State Management and Hooks
- **TaskManager Component**: Full-featured task management with:
  - Add new tasks
  - Mark tasks as completed
  - Delete tasks
  - Filter tasks (All, Active, Completed)
- **React Hooks Usage**:
  - `useState` for component state management
  - `useEffect` for side effects
  - `useContext` for theme management (light/dark mode)
- **Custom Hook**: `useLocalStorage` for persisting tasks and theme preferences

### ✅ Task 3: API Integration
- **JSONPlaceholder Integration**: Fetches posts from the public API
- **Loading States**: Beautiful loading spinners and states
- **Error Handling**: Comprehensive error handling with retry functionality
- **Search Feature**: Real-time search through posts by title and content
- **Pagination**: Full pagination with page navigation
- **Responsive Grid**: Posts displayed in a responsive grid layout

### ✅ Task 4: Styling with Tailwind CSS
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Dark Mode**: Complete dark/light theme switcher using Tailwind's dark mode
- **Custom Animations**: Smooth transitions and hover effects
- **Modern UI**: Clean, modern interface with proper spacing and typography
- **Accessibility**: Proper focus states and ARIA labels

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-js-jsx-and-css-mastering-front-end-development-RedRedRyan
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

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button component with variants
│   ├── Card.tsx        # Card component for content display
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── Layout.tsx      # Layout wrapper component
│   ├── TaskManager.jsx # Task management component
│   └── ApiData.tsx     # API integration component
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management context
├── hooks/              # Custom hooks
│   └── useLocalStorage.ts # Local storage hook
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Key Features Demonstrated

### Component Architecture
- **Reusable Components**: All components are highly reusable with proper prop interfaces
- **TypeScript Integration**: Full type safety with proper interfaces
- **Props Validation**: Comprehensive prop validation and documentation

### State Management
- **Local State**: Component-level state management with useState
- **Global State**: Theme management with useContext
- **Persistence**: Data persistence with custom useLocalStorage hook
- **Side Effects**: Proper useEffect usage for API calls and localStorage

### API Integration
- **Data Fetching**: Modern fetch API with proper error handling
- **Loading States**: User-friendly loading indicators
- **Error Boundaries**: Comprehensive error handling and recovery
- **Search & Filter**: Real-time search and filtering capabilities
- **Pagination**: Efficient data pagination

### Responsive Design
- **Mobile-First**: Designed for mobile devices first
- **Breakpoints**: Proper responsive breakpoints (sm, md, lg, xl)
- **Flexible Layouts**: CSS Grid and Flexbox for responsive layouts
- **Touch-Friendly**: Proper touch targets and interactions

### Dark Mode
- **System Preference**: Respects user's system theme preference
- **Manual Toggle**: Easy theme switching with toggle button
- **Persistence**: Theme preference saved to localStorage
- **Smooth Transitions**: Smooth transitions between themes

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray (#6B7280)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Danger**: Red (#EF4444)

### Typography
- **Font Family**: System UI fonts (system-ui, Avenir, Helvetica, Arial, sans-serif)
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with good line height

### Spacing
- **Consistent Spacing**: Using Tailwind's spacing scale
- **Responsive Spacing**: Different spacing for different screen sizes
- **Component Spacing**: Proper internal and external spacing

## 🚀 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **Optimized Builds**: Production-optimized builds
- **Fast Refresh**: Hot module replacement for development

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Responsive**: Works on all screen sizes from 320px to 4K

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📸 Screenshots

### Light Mode
![Light Mode Screenshot](screenshots/light-mode.png)

### Dark Mode
![Dark Mode Screenshot](screenshots/dark-mode.png)

### Mobile View
![Mobile Screenshot](screenshots/mobile.png)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://react.dev/) - The JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake REST API for testing
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## 📞 Contact

- **Author**: RedRedRyan
- **Email**: [your-email@example.com]
- **GitHub**: [@RedRedRyan](https://github.com/RedRedRyan)

---

⭐ **Star this repository if you found it helpful!**