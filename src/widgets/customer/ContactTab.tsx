import React from 'react';

import CommonHeader from '@/entities/customer/CommonHeader';
import ContactList from '@/features/customer/ContactList';
import { TabsContent } from '@/shared/ui/tabs';

export default function ContactTab() {
  return (
    <TabsContent value="contact" className="mt-6">
      <CommonHeader title="연락처 정보" />
      <ContactList />
    </TabsContent>
  );
}
