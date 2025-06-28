import * as React from 'react';

import { cn } from '@/shared/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

type FeatureCardProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function FeatureCard({ title, description, icon, className, ...props }: FeatureCardProps) {
  return (
    <Card
      className={cn(
        'flex flex-col h-full transition-transform duration-300 hover:-translate-y-2',
        'bg-gray-50 border-gray-200 hover:shadow-lg',
        className
      )}
      {...props}
    >
      <CardHeader className="pb-0">
        {icon && <div className="text-4xl mb-2">{icon}</div>}
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      {description && (
        <CardContent>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardContent>
      )}
    </Card>
  );
}
