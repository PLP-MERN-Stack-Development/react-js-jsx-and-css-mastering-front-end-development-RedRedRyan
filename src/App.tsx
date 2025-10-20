import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Card from './components/Card';
import Button from './components/Button';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  const [, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <Layout>
        {/* Home Section */}
        <section id="home" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                React App
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                A modern React application demonstrating component architecture, state management, 
                hooks usage, and API integration with beautiful Tailwind CSS styling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => scrollToSection('tasks')}
                  className="px-8 py-3"
                >
                  Try Task Manager
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection('api')}
                  className="px-8 py-3"
                >
                  View API Data
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="elevated" className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Task Management
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Add, complete, and delete tasks with local storage persistence and filtering options.
                </p>
              </Card>

              <Card variant="elevated" className="text-center p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  API Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Fetch and display data from external APIs with loading states and error handling.
                </p>
              </Card>

              <Card variant="elevated" className="text-center p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Responsive Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Beautiful, responsive design that works perfectly on all devices and screen sizes.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Task Manager Section */}
        <section id="tasks" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Task Manager
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Manage your tasks with ease. Add, complete, and organize your to-dos.
              </p>
            </div>
            <TaskManager />
      </div>
        </section>

        {/* API Data Section */}
        <section id="api" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                API Data Integration
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explore data fetched from JSONPlaceholder API with search and pagination features.
        </p>
      </div>
            <ApiData />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                About This Project
              </h2>
              <div className="max-w-4xl mx-auto">
                <Card variant="outlined" className="p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      This React application demonstrates modern front-end development practices including:
                    </p>
                    <ul className="text-left space-y-3 text-gray-600 dark:text-gray-400">
                      <li className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                        <span><strong>Component Architecture:</strong> Reusable UI components with TypeScript and proper prop interfaces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                        <span><strong>State Management:</strong> React hooks (useState, useEffect, useContext) and custom hooks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                        <span><strong>API Integration:</strong> Fetching data from external APIs with loading and error states</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                        <span><strong>Responsive Design:</strong> Mobile-first design with Tailwind CSS and dark mode support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                        <span><strong>Modern Tooling:</strong> Vite, TypeScript, ESLint, and modern development practices</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
