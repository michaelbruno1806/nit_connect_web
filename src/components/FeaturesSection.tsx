import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast Speed",
      description: "Experience ultra-low latency and high-speed connectivity with our fiber-optic infrastructure reaching up to 10Gbps."
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Advanced encryption, DDoS protection, and 24/7 security monitoring to keep your data safe and secure."
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description: "Easily scale your network capacity up or down based on your business needs with our flexible infrastructure."
    },
    {
      icon: "🔧",
      title: "24/7 Support",
      description: "Round-the-clock technical support from our certified network engineers to ensure maximum uptime."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Connect to our worldwide network with over 200+ data centers across 50+ countries."
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Reduce your networking costs by up to 40% while improving performance and reliability."
    }
  ];

  return (
    <section id="solutions" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-electric-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-sky-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="slide-in-view text-4xl md:text-6xl font-bold mb-8">
            Why Choose <span className="gradient-text-alt">nit_connect Pro</span>?
          </h2>
          <p className="slide-in-view text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Powerful network solutions trusted by over <span className="gradient-text font-semibold">10,000+ businesses</span> worldwide
          </p>
        </div>

        {/* Enhanced grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.15 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;