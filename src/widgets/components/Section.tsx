import React from 'react';

import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children, className, ...props }: SectionProps) {
  return (
    <section className={cn('mb-16', className)} {...props}>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}
