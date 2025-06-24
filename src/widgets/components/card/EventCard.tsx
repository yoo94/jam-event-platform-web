import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/widgets/components/ui/button';
import { Card, CardContent, CardFooter } from '@/widgets/components/ui/card';

type EventCardProps = {
  category: string;
  title: string;
  schedule: string;
  image?: string;
  href?: string;
  className?: string;
};

export function EventCard({
  category,
  title,
  schedule,
  image,
  href = '#',
  className,
}: EventCardProps) {
  return (
    <Card className={cn('overflow-hidden hover:shadow-lg transition', className)}>
      <div className="relative h-48 bg-gray-200">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        )}
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-primary font-semibold mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{schedule}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full" asChild>
          <Link href={href}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
