import { cn } from '../../utils/cn';

export default function Section({ 
  children, 
  className,
  containerClassName,
  ...props 
}) {
  return (
    <section className={cn('section-padding', className)} {...props}>
      <div className={cn('container-custom', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
