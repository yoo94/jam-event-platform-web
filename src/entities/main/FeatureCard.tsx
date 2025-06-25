import { cn } from '@/shared/lib/utils';
import { UnifiedCard } from '@/shared/ui/custom/UtillCards';

// 기존 컴포넌트들과 호환성을 위한 래퍼 컴포넌트
export function FeatureCard({
  title,
  description,
  icon,
  className,
  ...props
}: React.ComponentProps<typeof UnifiedCard>) {
  return (
    <UnifiedCard
      variant="feature"
      title={title}
      description={description}
      icon={icon}
      className={cn('bg-gray-50 border-gray-200 hover:shadow-lg', className)}
      {...props}
    />
  );
}
