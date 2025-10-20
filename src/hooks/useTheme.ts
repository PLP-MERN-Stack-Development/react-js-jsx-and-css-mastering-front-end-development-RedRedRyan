import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextValue';

/**
 * Hook to use theme context
 * @returns {ThemeContextType} - Theme context value
 * @throws {Error} - If used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
