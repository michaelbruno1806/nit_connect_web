import { Button } from '@/components/ui/button';
import NetworkNode from './NetworkNode';

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 pt-20">
        <div className="slide-in-view">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Enterprise Network Solutions</span>
            <br />
            <span className="text-foreground">That Scale</span>
          </h1>
        </div>

        <div className="slide-in-view" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect your business with reliable, high-performance network infrastructure designed for the modern enterprise. 
            Experience 99.99% uptime and lightning-fast connectivity.
          </p>
        </div>

        <div className="slide-in-view flex flex-col sm:flex-row gap-6 justify-center mb-16" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 glow-primary text-lg px-8 py-4">
            Start Your Trial
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
            View Solutions
          </Button>
        </div>

        {/* Network Diagram */}
        <div className="slide-in-view max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap">
            <NetworkNode icon="🏢" delay={0} />
            <NetworkNode icon="🌐" delay={0.5} />
            <NetworkNode icon="☁️" delay={1} />
            <NetworkNode icon="📱" delay={1.5} />
            <NetworkNode icon="💻" delay={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;