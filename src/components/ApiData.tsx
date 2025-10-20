import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ApiDataProps {
  className?: string;
}

/**
 * API Data component for fetching and displaying data from JSONPlaceholder
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - API Data component
 */
const ApiData: React.FC<ApiDataProps> = ({ className = '' }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10;

  // Sample English posts data
  const englishPosts: Post[] = [
    {
      id: 1,
      title: "Getting Started with React Development",
      body: "React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage state efficiently. This article covers the basics of setting up a React project and understanding its core concepts.",
      userId: 1
    },
    {
      id: 2,
      title: "Understanding TypeScript in Modern Web Development",
      body: "TypeScript brings static type checking to JavaScript, making code more maintainable and less prone to errors. Learn how to integrate TypeScript with React projects and leverage its powerful type system for better development experience.",
      userId: 2
    },
    {
      id: 3,
      title: "Mastering CSS with Tailwind CSS Framework",
      body: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. Discover how to create responsive, modern interfaces using Tailwind's comprehensive design system and utility classes.",
      userId: 3
    },
    {
      id: 4,
      title: "State Management in React Applications",
      body: "Managing state in React applications can be challenging as they grow in complexity. Explore different state management solutions including useState, useContext, and external libraries like Redux for handling application state effectively.",
      userId: 1
    },
    {
      id: 5,
      title: "API Integration and Data Fetching Patterns",
      body: "Learn how to integrate external APIs into your React applications. This guide covers different data fetching patterns, error handling, loading states, and best practices for managing asynchronous operations in modern web applications.",
      userId: 4
    },
    {
      id: 6,
      title: "Building Responsive Web Applications",
      body: "Responsive design is crucial for modern web applications. Understand how to create layouts that work seamlessly across different devices and screen sizes using CSS Grid, Flexbox, and responsive design principles.",
      userId: 2
    },
    {
      id: 7,
      title: "Modern JavaScript Features and ES6+",
      body: "JavaScript has evolved significantly with ES6 and beyond. Explore modern JavaScript features like arrow functions, destructuring, async/await, modules, and other syntax improvements that make development more efficient and code more readable.",
      userId: 3
    },
    {
      id: 8,
      title: "Testing React Components and Applications",
      body: "Testing is an essential part of building reliable React applications. Learn about different testing strategies, tools like Jest and React Testing Library, and how to write effective unit and integration tests for your components.",
      userId: 5
    },
    {
      id: 9,
      title: "Performance Optimization in React",
      body: "Optimizing React applications for better performance is crucial for user experience. Discover techniques like code splitting, lazy loading, memoization, and other optimization strategies to build fast and efficient applications.",
      userId: 1
    },
    {
      id: 10,
      title: "Deployment and DevOps for React Applications",
      body: "Learn how to deploy React applications to production environments. This guide covers different deployment platforms, CI/CD pipelines, environment configuration, and best practices for maintaining production applications.",
      userId: 4
    }
  ];

  // Fetch posts from local data (simulating API call)
  const fetchPosts = async (page: number = 1) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Calculate pagination
      const startIndex = (page - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const paginatedPosts = englishPosts.slice(startIndex, endIndex);
      
      setPosts(paginatedPosts);
      
      // Calculate total pages
      const totalPosts = englishPosts.length;
      setTotalPages(Math.ceil(totalPosts / postsPerPage));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts on component mount and page change
  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle refresh
  const handleRefresh = () => {
    fetchPosts(currentPage);
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Tech Articles & Tutorials
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This component demonstrates data fetching with loading states, error handling, 
          search functionality, and pagination using English content about web development.
        </p>

        {/* Search and Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search articles by title or content..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <Button
            variant="primary"
            onClick={handleRefresh}
            disabled={loading}
            className="whitespace-nowrap"
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600 dark:text-gray-400">Loading articles...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <Card variant="outlined" className="mb-6 border-red-200 dark:border-red-800">
            <div className="text-center py-8">
              <div className="text-red-600 dark:text-red-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Error Loading Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
              <Button variant="primary" onClick={handleRefresh}>
                Try Again
              </Button>
            </div>
          </Card>
        )}

        {/* Posts Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  variant="elevated"
                  hover
                  className="transition-all duration-200 hover:shadow-xl"
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow line-clamp-4">
                      {post.body}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                        <span>Post ID: {post.id}</span>
                        <span>User ID: {post.userId}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && searchTerm && (
              <Card variant="outlined" className="text-center py-8">
                <div className="text-gray-500 dark:text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p>No articles found matching "{searchTerm}"</p>
                </div>
              </Card>
            )}

            {/* Pagination */}
            {!searchTerm && totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1;
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'primary' : 'secondary'}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    );
                  })}
                </div>
                
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}

            {/* Results Info */}
            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              {searchTerm ? (
                <p>
                  Showing {filteredPosts.length} of {posts.length} articles matching "{searchTerm}"
                </p>
              ) : (
                <p>
                  Page {currentPage} of {totalPages} • Showing {posts.length} articles
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ApiData;
