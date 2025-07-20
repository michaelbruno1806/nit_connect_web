interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard = ({ number, label, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="slide-in-view glass-card rounded-xl p-8 text-center group hover:scale-110 transition-all duration-500 glow-hover cursor-pointer relative overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-sky-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Pulsing border effect */}
      <div className="absolute inset-0 rounded-xl border border-primary/20 scale-100 group-hover:scale-105 group-hover:border-primary/40 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="gradient-text-alt text-4xl md:text-5xl font-bold mb-3 group-hover:scale-125 transition-transform duration-500 group-hover:animate-pulse">
          {number}
        </div>
        <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
          {label}
        </div>
      </div>
    </div>
  );
};

export default StatCard;