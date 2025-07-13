import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Join', href: '/join' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold gradient-text">Plamento</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">











              <Link
                key="Home"
                to="/"
                className={`nav-link px-3 py-2 text-sm font-medium ${
                  isActive('/') ? 'text-primary after:scale-x-100' : ''
                }`}
              >
                Home
              </Link>
              <Link
                key="About"
                to="/about"
                className={`nav-link px-3 py-2 text-sm font-medium ${
                  isActive('/about') ? 'text-primary after:scale-x-100' : ''
                }`}
              >
                About
              </Link>
              <Link
                key="Team"
                to="/team"
                className={`nav-link px-3 py-2 text-sm font-medium ${
                  isActive('/team') ? 'text-primary after:scale-x-100' : ''
                }`}
              >
                Team
              </Link>
              <Link
                key="Join"
                to="/join"
                className={`nav-link px-3 py-2 text-sm font-medium ${
                  isActive('/join') ? 'text-primary after:scale-x-100' : ''
                }`}
              >
                Join
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">














            <Link
              key="Home"
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              key="About"
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              key="Team"
              to="/team"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/team') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              key="Join"
              to="/join"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/join') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;