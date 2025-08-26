import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Menu, X, BarChart3, User, TrendingUp, Home } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { to: "/onboarding", label: "Get Started", icon: User },
    { to: "/analyze", label: "Portfolio Analysis", icon: TrendingUp },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div
        className={cn(
          "mx-auto max-w-7xl transition-smooth rounded-2xl border backdrop-blur-md",
          isScrolled
            ? "glass-effect border-white/20 shadow-medium"
            : "bg-white/10 border-white/15 shadow-soft"
        )}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-smooth">
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-bounce-gentle"></div>
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                Arth<span className="gradient-text">Saathi</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-xl transition-smooth",
                    "hover:bg-white/10 hover:backdrop-blur-sm",
                    isActive(to)
                      ? "bg-white/20 text-primary-foreground border border-white/20"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/simulation/default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-xl font-medium transition-smooth transform hover:scale-105 shadow-soft hover:shadow-medium"
              >
                Try Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-primary-foreground hover:bg-white/10 transition-smooth"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 animate-slide-up rounded-b-2xl">
              <div className="space-y-2 px-2">
                {navItems.map(({ to, label, icon: Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-xl transition-smooth",
                      "hover:bg-white/10",
                      isActive(to)
                        ? "bg-white/20 text-primary-foreground border border-white/20"
                        : "text-primary-foreground/80"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10 mt-4 px-2">
                  <Link
                    to="/simulation/default"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-3 rounded-xl font-medium text-center transition-smooth"
                  >
                    Try Demo
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
