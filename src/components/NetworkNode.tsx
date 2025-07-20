interface NetworkNodeProps {
  icon: string;
  delay?: number;
}

const NetworkNode = ({ icon, delay = 0 }: NetworkNodeProps) => {
  return (
    <div 
      className="w-16 h-16 md:w-20 md:h-20 glass-card glass-card-border rounded-full flex items-center justify-center text-2xl md:text-3xl pulse-glow float-animation"
      style={{ animationDelay: `${delay}s` }}
    >
      {icon}
    </div>
  );
};

export default NetworkNode;