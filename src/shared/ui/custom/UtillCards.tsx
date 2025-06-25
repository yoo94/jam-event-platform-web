import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';

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
const DEFAULT_EVENT_IMAGE = '/images/default-image.png';

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
  return (
    <Card
      className={cn(
        'flex flex-col h-full transition-transform duration-300 hover:-translate-y-2',
        variant === 'event' ? 'overflow-hidden' : '',
        className
      )}
      {...props}
    >
      {/* 이미지 영역 (이벤트 카드) */}
      {variant === 'event' && (
        <div className="relative w-full h-48 bg-gray-100">
          <Image
            src={image || DEFAULT_EVENT_IMAGE}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <CardHeader className={variant === 'feature' ? 'pb-0' : ''}>
        {variant === 'feature' && icon && <div className="text-4xl mb-2">{icon}</div>}

        {variant === 'event' && category && (
          <div className="text-sm text-primary font-semibold">{category}</div>
        )}

        <CardTitle>{title}</CardTitle>

        {variant === 'event' && schedule && <p className="text-sm text-gray-600">{schedule}</p>}
      </CardHeader>

      {description && (
        <CardContent>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardContent>
      )}

      {variant === 'event' && href && (
        <CardFooter className="mt-auto">
          <Button variant="outline" className="w-full" asChild>
            <Link href={href}>{actionText}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
