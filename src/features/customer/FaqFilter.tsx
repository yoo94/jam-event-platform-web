import React from 'react';

import { Button } from '@/shared/ui/button';
interface FaqFilterProps {
  faqCategories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

function FaqFilter({ faqCategories, selectedCategory, setSelectedCategory }: FaqFilterProps) {
  return (
    <>
      {/* 카테고리 필터 */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {faqCategories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </>
  );
}

export default FaqFilter;
