import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';

type EventCardProps = {
  title: string;
  category?: string;
  schedule?: string;
  image?: string;
  href?: string;
  actionText?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const DEFAULT_EVENT_IMAGE = '/images/default-image.png';

export function EventCard({
  title,
  category,
  schedule,
  image,
  href,
  actionText = '자세히 보기',
  className,
  ...props
}: EventCardProps) {
  return (
    <Card
      className={cn(
        'flex flex-col h-full transition-transform duration-300 hover:-translate-y-2',
        'overflow-hidden h-auto shadow-md hover:shadow-xl',
        className
      )}
      {...props}
    >
      {/* 이미지 영역 */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={image || DEFAULT_EVENT_IMAGE}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <CardHeader>
        {category && <div className="text-sm text-primary font-semibold">{category}</div>}
        <CardTitle>{title}</CardTitle>
        {schedule && <p className="text-sm text-gray-600">{schedule}</p>}
      </CardHeader>

      {href && (
        <CardFooter className="mt-auto">
          <Button variant="outline" className="w-full" asChild>
            <Link href={href}>{actionText}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
