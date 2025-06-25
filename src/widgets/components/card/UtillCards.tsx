import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/widgets/components/ui/button';

type CardVariant = 'feature' | 'event' | 'basic';

type UnifiedCardProps = {
  // 공통 속성
  title: string;
  description?: string;
  className?: string;
  variant?: CardVariant;

  // Feature 카드 관련 속성
  icon?: React.ReactNode;

  // Event 카드 관련 속성
  category?: string;
  schedule?: string;
  image?: string;
  href?: string;
  actionText?: string;
};

// 기본 이미지 경로 (실제 프로젝트에 맞게 경로 수정 필요)
const DEFAULT_EVENT_IMAGE = '/images/default-event.jpg';

export function UnifiedCard({
  title,
  description,
  className,
  variant = 'basic',
  icon,
  category,
  schedule,
  image,
  href,
  actionText = '자세히 보기',
  ...props
}: UnifiedCardProps & React.HTMLAttributes<HTMLDivElement>) {
  // variant별 기본 스타일 정의
  const getVariantStyles = () => {
    switch (variant) {
      case 'feature':
        return 'bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200';
      case 'event':
        return 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100';
      default:
        return 'bg-white rounded-lg border shadow-sm hover:shadow-md transition';
    }
  };

  return (
    <div className={cn(getVariantStyles(), 'flex flex-col h-full', className)} {...props}>
      {/* 이미지 영역 (이벤트 카드) */}
      {variant === 'event' && (
        <div className="relative h-48 bg-gray-100">
          <Image
            src={image || DEFAULT_EVENT_IMAGE}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      {/* 컨텐츠 영역 */}
      <div className="p-6 flex-grow">
        {variant === 'feature' && icon && <div className="text-4xl mb-4">{icon}</div>}

        {variant === 'event' && category && (
          <div className="text-sm text-primary font-semibold mb-2">{category}</div>
        )}

        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {variant === 'event' && schedule && <p className="text-gray-600 mb-4">{schedule}</p>}

        {description && <p className="text-gray-600">{description}</p>}
      </div>

      {/* 버튼 영역 (이벤트 카드) */}
      {variant === 'event' && href && (
        <div className="px-6 pb-6">
          <Button variant="outline" className="w-full" asChild>
            <Link href={href}>{actionText}</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

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
      className={className}
      {...props}
    />
  );
}

export function EventCard({
  category,
  title,
  schedule,
  image,
  href,
  className,
  ...props
}: Omit<React.ComponentProps<typeof UnifiedCard>, 'variant' | 'description'>) {
  return (
    <UnifiedCard
      variant="event"
      title={title}
      category={category}
      schedule={schedule}
      image={image}
      href={href}
      className={className}
      {...props}
    />
  );
}
