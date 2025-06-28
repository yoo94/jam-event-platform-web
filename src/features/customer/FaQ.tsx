'use client';

import React, { useState } from 'react';

import { FaqCard } from '@/entities/customer/FaqCard';
import { faqCategories, faqData } from '@/shared/mock/customer';
import { Button } from '@/shared/ui/button';
import { TabsContent } from '@/shared/ui/tabs';

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredFaq =
    selectedCategory === '전체'
      ? faqData
      : faqData.filter(faq => faq.category === selectedCategory);

  return (
    <TabsContent value="faq" className="mt-6">
      <div className="container mx-auto py-12 px-4">
        {/* 페이지 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">자주 묻는 질문</h1>
          <p className="text-gray-600 text-lg">EventJAM 사용에 대한 궁금한 점들을 확인해보세요</p>
        </div>

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

        {/* FAQ 목록 */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaq.map(faq => (
            <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* 추가 도움말 섹션 */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">원하는 답변을 찾지 못하셨나요?</h3>
          <p className="text-gray-600 mb-6">고객지원팀이 직접 도움을 드리겠습니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default">문의하기</Button>
            <Button variant="outline">실시간 채팅</Button>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}
