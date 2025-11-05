import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, Home, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#E1E6EC] sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 px-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="w-10 h-10 text-[#26D07C] bg-[#26D07C]/10 rounded-full p-1.5" />

            <span className="text-2xl font-bold bg-linear-to-r from-[#1E90FF] to-[#26D07C] bg-clip-text text-transparent tracking-wide">
              EasyPG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/browse"
              className={`transition-colors ${
                isActive("/browse")
                  ? "text-[#1E90FF] font-medium"
                  : "text-[#384B63] hover:text-[#1E90FF]"
              }`}
            >
              Browse Accommodations
            </Link>
            <Link
              to="/list-property"
              className={`transition-colors ${
                isActive("/list-property")
                  ? "text-[#1E90FF] font-medium"
                  : "text-[#384B63] hover:text-[#1E90FF]"
              }`}
            >
              List Your Property
            </Link>
            <a href="#" className="text-[#384B63] hover:text-[#1E90FF] transition-colors">
              About
            </a>
            <a href="#" className="text-[#384B63] hover:text-[#1E90FF] transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Globe className="h-4 w-4 text-[#384B63]" />
            </Button>
            <Button variant="outline" size="sm" className="border-[#1E90FF] text-[#1E90FF]">
              Log In
            </Button>
            <Button variant="default" size="sm" className="bg-[#1E90FF] hover:bg-[#187BCD] text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#384B63]" />
            ) : (
              <Menu className="h-6 w-6 text-[#384B63]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E1E6EC]">
            <div className="flex flex-col space-y-4">
              <Link
                to="/browse"
                className={`transition-colors ${
                  isActive("/browse")
                    ? "text-[#1E90FF] font-medium"
                    : "text-[#384B63] hover:text-[#1E90FF]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Accommodations
              </Link>
              <Link
                to="/list-property"
                className={`transition-colors ${
                  isActive("/list-property")
                    ? "text-[#1E90FF] font-medium"
                    : "text-[#384B63] hover:text-[#1E90FF]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                List Your Property
              </Link>
              <a href="#" className="text-[#384B63] hover:text-[#1E90FF] transition-colors">
                About
              </a>
              <a href="#" className="text-[#384B63] hover:text-[#1E90FF] transition-colors">
                Contact
              </a>
              <div className="flex space-x-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1 border-[#1E90FF] text-[#1E90FF]">
                  Log In
                </Button>
                <Button variant="default" size="sm" className="flex-1 bg-[#1E90FF] hover:bg-[#187BCD] text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
