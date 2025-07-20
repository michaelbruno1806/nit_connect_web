import { Button } from '@/components/ui/button';
import NetworkNode from './NetworkNode';

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 parallax-pattern" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan/20 rounded-full blur-3xl pulse-glow-intense" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-blue/15 rounded-full blur-3xl pulse-glow-intense" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 pt-20">
        <div className="slide-in-view">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text-alt block mb-4">Enterprise Network Solutions</span>
            <span className="text-foreground block">That Scale Beyond Limits</span>
          </h1>
        </div>

        <div className="slide-in-view" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect your business with reliable, high-performance network infrastructure designed for the modern enterprise. 
            Experience 99.99% uptime and lightning-fast connectivity.
          </p>
        </div>

        <div className="slide-in-view flex flex-col sm:flex-row gap-6 justify-center mb-16" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="btn-enhanced bg-gradient-primary hover:opacity-90 glow-primary text-lg px-10 py-5 shadow-2xl">
            <span className="relative z-10">Start Your Journey Now</span>
          </Button>
          <Button variant="outline" size="lg" className="btn-enhanced border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-5 glow-hover">
            <span className="relative z-10">View Solutions</span>
          </Button>
        </div>

        {/* Enhanced Network Diagram */}
        <div className="slide-in-view max-w-5xl mx-auto glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden" style={{ animationDelay: '0.6s' }}>
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
          </div>
          
          <div className="relative z-10">
            <h3 className="gradient-text text-xl md:text-2xl font-semibold mb-8">Connected Infrastructure</h3>
            <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
              <NetworkNode icon="🏢" delay={0} />
              <div className="hidden md:block w-8 h-0.5 bg-gradient-primary animate-pulse" />
              <NetworkNode icon="🌐" delay={0.5} />
              <div className="hidden md:block w-8 h-0.5 bg-gradient-primary animate-pulse" />
              <NetworkNode icon="☁️" delay={1} />
              <div className="hidden md:block w-8 h-0.5 bg-gradient-primary animate-pulse" />
              <NetworkNode icon="📱" delay={1.5} />
              <div className="hidden md:block w-8 h-0.5 bg-gradient-primary animate-pulse" />
              <NetworkNode icon="💻" delay={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
