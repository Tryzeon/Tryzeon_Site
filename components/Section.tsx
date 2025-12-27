import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => (
  <section 
    id={id} 
    className={`relative w-full ${className}`}
  >
    {children}
  </section>
);
