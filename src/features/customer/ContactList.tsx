import React from 'react';

import ContactCard from '@/entities/customer/ContactCard';
import { contactData } from '@/shared/mock/customer';

function ContactList() {
  const { cards } = contactData;
  const leftCards = cards.slice(0, 2);
  const rightCards = cards.slice(2);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {leftCards.map(card => (
            <ContactCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              descriptions={card.descriptions}
            />
          ))}
        </div>

        <div className="space-y-6">
          {rightCards.map(card => (
            <ContactCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              descriptions={card.descriptions}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ContactList;
