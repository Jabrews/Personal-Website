import { useState } from "react";

type GlassCardProps = {
  children: React.ReactNode;
};

const GlassCard = ({ children }: GlassCardProps) => {

  const [showGlass, toggleShowGlass] = useState(true)


  return (
    <div 
      className={showGlass ? 'glass-card' : ''}
      onPointerEnter={() => toggleShowGlass(false)}
      onPointerLeave={() => toggleShowGlass(true)}

    >
      {children}
    </div>
  );
};

export default GlassCard;
