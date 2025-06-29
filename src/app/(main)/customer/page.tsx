import React from 'react';

import Contact from '@/entities/customer/Contact';
import HelpInfo from '@/entities/customer/HelpInfo';
import TabList from '@/entities/customer/TabList';
import { Tabs } from '@/shared/ui/tabs';
import Ask from '@/widgets/customer/AskTab';
import FaQ from '@/widgets/customer/FaQTab';

export default function CustomerPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-12">고객센터</h1>

        <Tabs defaultValue="faq" className="w-full">
          {/* 탭 목록 */}
          <TabList />

          {/* 자주 묻는 질문 */}
          <FaQ />

          {/* 문의하기 폼 */}
          <Ask />

          {/* 연락처 정보 */}
          <Contact />

          {/* 도움말 */}
          <HelpInfo />
        </Tabs>
      </div>
    </>
  );
}
