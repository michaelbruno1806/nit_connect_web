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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Services Text */}
          <div className="slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="gradient-text-alt block">Complete Network Infrastructure</span> 
              <span className="text-foreground">Solutions</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              From small businesses to enterprise corporations, we provide comprehensive network solutions 
              tailored to your specific requirements with <span className="gradient-text font-semibold">unmatched reliability</span>.
            </p>

            <ul className="space-y-5 mb-10">
              {services.map((service, index) => (
                <li 
                  key={service}
                  className="slide-in-view flex items-center text-foreground group cursor-pointer hover:translate-x-4 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <span className="text-primary mr-5 text-2xl group-hover:scale-150 group-hover:rotate-180 transition-all duration-300">✓</span>
                  <span className="group-hover:gradient-text transition-all duration-300 text-lg">{service}</span>
                </li>
              ))}
            </ul>

            <Button className="btn-enhanced bg-gradient-primary hover:opacity-90 glow-primary text-xl px-10 py-4 shadow-2xl">
              <span className="relative z-10">Get Custom Quote</span>
            </Button>
          </div>

          {/* Enhanced Stats Visual */}
          <div className="slide-in-right relative">
            <div className="glass-card rounded-3xl p-10 relative overflow-hidden">
              {/* Enhanced rotating background effect */}
              <div className="absolute inset-0 bg-gradient-conic from-primary/30 via-transparent to-primary/30 animate-spin opacity-20" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-sky-blue/10" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-center mb-10 gradient-text-alt">
                  Trusted by Industry Leaders
                </h3>
                
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <StatCard
                      key={stat.label}
                      number={stat.number}
                      label={stat.label}
                      delay={0.15 * index}
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