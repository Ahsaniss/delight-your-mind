import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Delightfully You
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`transition-colors ${isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Home
            </Link>
            <Link to="/agents" className={`transition-colors ${isActive('/agents') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Agents
            </Link>
            <Link to="/reviews" className={`transition-colors ${isActive('/reviews') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Reviews
            </Link>
            <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              About
            </Link>
            <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              ☰
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;