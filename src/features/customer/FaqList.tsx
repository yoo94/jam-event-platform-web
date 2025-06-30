import React, { useState } from 'react';

import { FaqCard } from '@/entities/customer/FaqCard';
import { Collapsible } from '@/shared/ui/collapsible';

interface FaqListProps {
  selectedCategory: string;
  faqData: Array<{
    id: number;
    question: string;
    answer: string;
    category: string;
  }>;
}

function FaqList({ selectedCategory, faqData }: FaqListProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filteredFaq =
    selectedCategory === '전체'
      ? faqData
      : faqData.filter(faq => faq.category === selectedCategory);
  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };
  return (
    <>
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredFaq.map(faq => (
          <Collapsible
            key={faq.id}
            open={openItems.has(faq.id)}
            onOpenChange={() => toggleItem(faq.id)}
          >
            <FaqCard
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.has(faq.id)}
              onToggle={() => toggleItem(faq.id)}
            />
          </Collapsible>
        ))}
      </div>
    </>
  );
}

export default FaqList;
