import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "About Me", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              MSY
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                >
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      scrolled
                        ? 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                        : 'text-gray-800 dark:text-gray-200 hover:text-blue-500'
                    } group`}
                  >
                    {link.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-transform group-hover:scale-x-100"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden"
          >
            <button className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Gradient Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className={`h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </motion.nav>
  );
};

export default Navbar; 