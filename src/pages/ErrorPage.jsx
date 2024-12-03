import { Link } from 'react-router-dom';
import { Home, RefreshCcw } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-8 text-center bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300 overflow-hidden">
        <div className="relative">
          {/* Animated 404 Text */}
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-bounce">
            404
          </h1>

          {/* Subtle background shapes */}
          <div className="absolute -top-12 -left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Oops! Page Not Found
          </h2>

          <p className="text-gray-600">
            The page you're looking for seems to have wandered off into the
            digital wilderness. Don't worry, we'll help you find your way back!
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors group"
          >
            <Home className="group-hover:animate-bounce" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center space-x-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors group"
          >
            <RefreshCcw className="group-hover:animate-spin" />
            <span>Reload Page</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
