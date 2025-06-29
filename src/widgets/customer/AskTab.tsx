'use client';

import React from 'react';

import CommonHeader from '@/entities/customer/CommonHeader';
import AskForm from '@/features/customer/AskForm';
import { TabsContent } from '@/shared/ui/tabs';

export default function AskTab() {
  return (
    <TabsContent value="inquiry" className="mt-6">
      <div className="flex justify-center items-center min-h-[600px]">
        <div className="w-full max-w-2xl px-4">
          <CommonHeader title="문의하기" />
          <AskForm />
        </div>
      </div>
    </TabsContent>
  );
}
