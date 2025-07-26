import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Support', href: '#support' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-background/90 shadow-lg border-b border-primary/10'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-primary tracking-tight cursor-pointer hover:scale-105 transition-transform duration-300">
          nit_connect<span className="text-yellow-500"> Pro</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10" role="navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-all duration-300 relative group text-[17px] font-medium"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-yellow-400 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary hover:text-white transition px-5 py-2"
          >
            Contact Us
          </Button>
          <Button className="bg-gradient-to-br from-primary to-yellow-400 text-white shadow-xl hover:opacity-90 px-5 py-2">
            Request Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-background border-t border-primary/10 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-muted-foreground hover:text-primary text-lg"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col space-y-2 mt-4">
            <Button variant="outline" className="w-full">
              Contact Us
            </Button>
            <Button className="w-full bg-gradient-to-r from-primary to-yellow-400 text-white">
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
