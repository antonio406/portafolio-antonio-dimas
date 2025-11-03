import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-dark shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Nombre */}
            <div className="flex-1">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-primary">Antonio Dimas</span>
              </Link>
            </div>
            
            {/* Menú Central */}
            <div className="flex-1 flex justify-center">
              <div className="hidden sm:flex sm:space-x-5">
                <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 transition-colors duration-200">
                  Inicio
                </Link>
                <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 transition-colors duration-200">
                  Sobre Mí
                </Link>
                <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 transition-colors duration-200">
                  Proyectos
                </Link>
                <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 transition-colors duration-200">
                  Contacto
                </Link>
              </div>
            </div>

            {/* Botón de Tema */}
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Cambiar tema"
              >
                {darkMode ? (
                  <FaSun className="h-5 w-5" />
                ) : (
                  <FaMoon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-white dark:bg-dark shadow-md mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-700 dark:text-gray-300">
              © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;