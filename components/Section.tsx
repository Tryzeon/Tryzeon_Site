import { brand } from '@/lib/constants';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => (
  <section 
    id={id} 
    className={`relative w-full max-w-7xl mx-auto px-6 sm:px-8 ${className}`} 
    style={{ backgroundColor: brand.lightBg }}
  >
    {children}
  </section>
);
