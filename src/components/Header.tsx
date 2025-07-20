import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-background/95 shadow-2xl border-b border-white/10' 
        : 'backdrop-blur-md bg-background/90'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="gradient-text text-2xl font-bold cursor-pointer hover:scale-105 transition-transform">
          nit_connect Pro
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Solutions', 'Services', 'Support', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:flex border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            Get Quote
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity glow-primary">
            Start Free Trial
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;