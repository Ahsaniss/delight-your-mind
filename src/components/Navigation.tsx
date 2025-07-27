import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold text-slate-800 truncate">
              Delight Your Mind
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/agents" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              AI Agents
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Contact
            </Link>
            
            <Button 
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105 px-6 py-2"
            >
              <Link to="/agents">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors z-60 relative"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="md:hidden fixed top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="container mx-auto px-4 sm:px-6 py-6">
                <div className="flex flex-col gap-6">
                  <Link 
                    to="/" 
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors px-4 py-3 rounded-lg hover:bg-purple-50 border border-transparent hover:border-purple-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🏠 Home
                  </Link>
                  <Link 
                    to="/agents" 
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors px-4 py-3 rounded-lg hover:bg-purple-50 border border-transparent hover:border-purple-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🤖 AI Agents
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors px-4 py-3 rounded-lg hover:bg-purple-50 border border-transparent hover:border-purple-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ℹ️ About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors px-4 py-3 rounded-lg hover:bg-purple-50 border border-transparent hover:border-purple-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    📧 Contact
                  </Link>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full py-4 text-lg font-semibold"
                    >
                      <Link to="/agents" onClick={() => setIsMenuOpen(false)}>
                        ✨ Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;