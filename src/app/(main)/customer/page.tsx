import React from 'react';

import TabList from '@/entities/customer/TabList';
import { Tabs } from '@/shared/ui/tabs';
import AskTab from '@/widgets/customer/AskTab';
import ContactTab from '@/widgets/customer/ContactTab';
import FaQTab from '@/widgets/customer/FaQTab';
import HelpInfoTab from '@/widgets/customer/HelpInfoTab';

export default function CustomerPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-12">고객센터</h1>

        <Tabs defaultValue="faq" className="w-full">
          {/* 탭 목록 */}
          <TabList />

          {/* 자주 묻는 질문 */}
          <FaQTab />

          {/* 문의하기 폼 */}
          <AskTab />

          {/* 연락처 정보 */}
          <ContactTab />

          {/* 도움말 */}
          <HelpInfoTab />
        </Tabs>
      </div>
    </>
  );
}
