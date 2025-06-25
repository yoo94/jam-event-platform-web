import { cn } from '@/shared/lib/utils';
import { UnifiedCard } from '@/shared/ui/custom/UtillCards';

export function EventCard({
  category,
  title,
  schedule,
  image,
  href,
  className,
  ...props
}: Omit<React.ComponentProps<typeof UnifiedCard>, 'variant' | 'description'> & {
  className?: string;
}) {
  return (
    <UnifiedCard
      variant="event"
      title={title}
      category={category}
      schedule={schedule}
      image={image}
      href={href}
      className={cn('h-auto shadow-md hover:shadow-xl', className)}
      {...props}
    />
  );
}
