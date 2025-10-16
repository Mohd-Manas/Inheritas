import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Card({ 
  children, 
  className, 
  hover = true,
  ...props 
}) {
  const Component = hover ? motion.div : 'div';
  
  const motionProps = hover ? {
    whileHover: { y: -5, boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.15)' },
    transition: { duration: 0.3 }
  } : {};

  return (
    <Component
      className={cn('card', className)}
      {...(hover ? motionProps : {})}
      {...props}
    >
      {children}
    </Component>
  );
}
