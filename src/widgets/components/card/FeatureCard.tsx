import * as React from 'react';

import { cn } from '@/lib/utils';

type FeatureCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function FeatureCard({ title, description, icon, className, ...props }: FeatureCardProps) {
  return (
    <div
      className={cn('bg-gray-50 p-6 rounded-lg border hover:shadow-md transition', className)}
      {...props}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
