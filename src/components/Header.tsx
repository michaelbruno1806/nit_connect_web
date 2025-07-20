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
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-background/95 shadow-2xl border-b border-primary/20' 
        : 'backdrop-blur-md bg-background/80'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <div className="gradient-text-alt text-3xl font-bold cursor-pointer hover:scale-110 transition-all duration-300 hover:animate-pulse">
          nit_connect Pro
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          {['Solutions', 'Services', 'Support', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-all duration-300 relative group py-3 text-lg font-medium hover:scale-105"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-primary transition-all duration-500 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-5">
          <Button variant="outline" className="btn-enhanced hidden sm:flex border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2">
            <span className="relative z-10">Contact Us</span>
          </Button>
          <Button className="btn-enhanced bg-gradient-primary hover:opacity-90 glow-primary px-6 py-2">
            <span className="relative z-10">Request Demo</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
