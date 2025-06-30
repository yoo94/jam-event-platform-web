'use client';

import React, { useState } from 'react';

import CommonHeader from '@/entities/customer/CommonHeader';
import FaqFilter from '@/features/customer/FaqFilter';
import FaqHelp from '@/features/customer/FaqHelp';
import FaqList from '@/features/customer/FaqList';
import { faqCategories, faqData } from '@/shared/mock/customer';
import { TabsContent } from '@/shared/ui/tabs';

export default function FaqTab() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  return (
    <TabsContent value="faq" className="mt-6">
      <div className="container mx-auto py-12 px-4">
        {/* 페이지 헤더 */}
        <CommonHeader title="자주 묻는 질문" />
        {/* 카테고리 필터 */}
        <FaqFilter
          faqCategories={faqCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* FAQ 목록 */}
        <FaqList selectedCategory={selectedCategory} faqData={faqData} />
        {/* FAQ 도움말 */}
        <FaqHelp />
      </div>
    </TabsContent>
  );
}
