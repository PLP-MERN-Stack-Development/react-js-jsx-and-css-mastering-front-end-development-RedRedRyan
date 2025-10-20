import React, { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../hooks/useTheme';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * Layout component that includes Navbar and Footer
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Page content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - Layout component
 */
const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors ${className}`}>
      <Navbar onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
