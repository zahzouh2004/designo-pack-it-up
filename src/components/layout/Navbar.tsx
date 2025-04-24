
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-designo-brown-dark">
              designo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium hover:text-designo-brown transition-colors">
              الرئيسية
            </Link>
            <Link to="/services" className="font-medium hover:text-designo-brown transition-colors">
              خدماتنا
            </Link>
            <Link to="/about" className="font-medium hover:text-designo-brown transition-colors">
              عن الشركة
            </Link>
            <Link to="/contact" className="font-medium hover:text-designo-brown transition-colors">
              اتصل بنا
            </Link>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button asChild className="bg-designo-brown hover:bg-designo-brown-dark text-white">
              <Link to="/contact">طلب تصميم</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-designo-brown"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="px-4 py-2 text-center hover:bg-designo-gray-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link 
                to="/services" 
                className="px-4 py-2 text-center hover:bg-designo-gray-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                خدماتنا
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-center hover:bg-designo-gray-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                عن الشركة
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 text-center hover:bg-designo-gray-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
              <Button asChild className="bg-designo-brown hover:bg-designo-brown-dark text-white w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>طلب تصميم</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
