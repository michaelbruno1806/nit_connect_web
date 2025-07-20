interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="slide-in-view glass-card glass-card-border rounded-xl p-8 group hover:-translate-y-4 transition-all duration-500 glow-hover relative overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl mb-6 mx-auto glow-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;