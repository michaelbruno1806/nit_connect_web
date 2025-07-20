interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard = ({ number, label, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="slide-in-view glass-card rounded-lg p-6 text-center group hover:scale-105 transition-all duration-300 glow-hover"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="gradient-text text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div className="text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </div>
    </div>
  );
};

export default StatCard;