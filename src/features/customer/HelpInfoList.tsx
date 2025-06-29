import React from 'react';

import HelpInfoCard from '@/entities/customer/HelpInfoCard';
import { helpInfoData } from '@/shared/mock/customer';

export default function HelpInfoList() {
  const { cards } = helpInfoData;

  const leftCards = cards.slice(0, 2);
  const rightCards = cards.slice(2);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {leftCards.map(card => (
            <HelpInfoCard
              key={card.id}
              title={card.title}
              type={card.type as 'simple' | 'ordered' | 'complex'}
              descriptions={card.descriptions}
              sections={card.sections}
            />
          ))}
        </div>

        <div className="space-y-6">
          {rightCards.map(card => (
            <HelpInfoCard
              key={card.id}
              title={card.title}
              type={card.type as 'simple' | 'ordered' | 'complex'}
              descriptions={card.descriptions}
              sections={card.sections}
            />
          ))}
        </div>
      </div>
    </>
  );
}
