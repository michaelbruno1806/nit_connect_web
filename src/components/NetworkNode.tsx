interface NetworkNodeProps {
  icon: string;
  delay?: number;
}

const NetworkNode = ({ icon, delay = 0 }: NetworkNodeProps) => {
  return (
    <div 
      className="w-20 h-20 md:w-24 md:h-24 glass-card glass-card-border rounded-full flex items-center justify-center text-2xl md:text-3xl pulse-glow-intense float-animation group cursor-pointer relative overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full" />
      
      {/* Icon with enhanced hover effect */}
      <span className="relative z-10 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
        {icon}
      </span>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full border border-primary/30 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
    </div>
  );
};

export default NetworkNode;