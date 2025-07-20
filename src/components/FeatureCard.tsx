interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="slide-in-view glass-card glass-card-border rounded-2xl p-8 group hover:-translate-y-6 transition-all duration-700 glow-hover relative overflow-hidden cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-sky-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto glow-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
          <span className="group-hover:animate-bounce">{icon}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
          {description}
        </p>
        
        {/* Enhanced bottom border effect */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-primary group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
};

export default FeatureCard;