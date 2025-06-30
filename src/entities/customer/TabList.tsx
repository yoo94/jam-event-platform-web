import React from 'react';

import { TabsList, TabsTrigger } from '@/shared/ui/tabs';

function TabList() {
  return (
    <>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="faq">자주 묻는 질문</TabsTrigger>
        <TabsTrigger value="inquiry">문의하기</TabsTrigger>
        <TabsTrigger value="contact">연락처 정보</TabsTrigger>
        <TabsTrigger value="help">도움말</TabsTrigger>
      </TabsList>
    </>
  );
}

export default TabList;
