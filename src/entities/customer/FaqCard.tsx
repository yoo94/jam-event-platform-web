import * as React from 'react';

import { cn } from '@/shared/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { CollapsibleContent, CollapsibleTrigger } from '@/shared/ui/collapsible';

type FaqCardProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function FaqCard({ question, answer, isOpen, onToggle, className, ...props }: FaqCardProps) {
  return (
    <Card className={cn('border-l-4 border-l-primary/20', className)} {...props}>
      <CollapsibleTrigger className="w-full text-left" onClick={onToggle}>
        <CardHeader className="hover:bg-gray-50/50 transition-colors">
          <CardTitle className="text-lg flex justify-between items-center">
            {question}
            <span
              className={cn(
                'text-primary text-xl transition-transform duration-200',
                isOpen ? 'rotate-45' : ''
              )}
            >
              +
            </span>
          </CardTitle>
        </CardHeader>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <CardContent>
          <CardDescription className="text-gray-600 whitespace-pre-line">{answer}</CardDescription>
        </CardContent>
      </CollapsibleContent>
    </Card>
  );
}
