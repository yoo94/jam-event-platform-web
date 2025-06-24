import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-32">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="text-gray-600 max-w-2xl mx-auto mb-20">{description}</p>}
      </div>
      {children}
    </div>
  );
}
