import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">Portfolio</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Link to="/" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary">Inicio</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary">Sobre Mí</Link>
            <Link to="/projects" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary">Proyectos</Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary">Contacto</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Sobre Mí
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;