import { Button } from '@/components/ui/button';
import StatCard from './StatCard';

const ServicesSection = () => {
  const services = [
    "Dedicated Internet Access (DIA)",
    "MPLS & SD-WAN Solutions", 
    "Cloud Connectivity Services",
    "Managed Network Services",
    "Voice over IP (VoIP) Systems",
    "Network Security & Monitoring",
    "Disaster Recovery Solutions",
    "24/7 Network Operations Center"
  ];

  const stats = [
    { number: "99.99%", label: "Network Uptime" },
    { number: "10K+", label: "Happy Clients" },
    { number: "200+", label: "Global Locations" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/5 w-80 h-80 bg-electric-cyan/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-sky-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Services Text */}
          <div className="slide-in-view">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Complete Network Infrastructure</span> Solutions
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From small businesses to enterprise corporations, we provide comprehensive network solutions 
              tailored to your specific requirements.
            </p>

            <ul className="space-y-4 mb-8">
              {services.map((service, index) => (
                <li 
                  key={service}
                  className="slide-in-view flex items-center text-foreground group cursor-pointer hover:translate-x-2 transition-transform"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <span className="text-primary mr-4 text-xl group-hover:scale-125 transition-transform">✓</span>
                  <span className="group-hover:text-primary transition-colors">{service}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-gradient-primary hover:opacity-90 glow-primary text-lg px-8 py-3">
              Get Custom Quote
            </Button>
          </div>

          {/* Stats Visual */}
          <div className="slide-in-view relative">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              {/* Rotating background effect */}
              <div className="absolute inset-0 bg-gradient-conic from-primary/20 via-transparent to-primary/20 animate-spin opacity-20" style={{ animationDuration: '20s' }} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
                  Trusted by Industry Leaders
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <StatCard
                      key={stat.label}
                      number={stat.number}
                      label={stat.label}
                      delay={0.1 * index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;