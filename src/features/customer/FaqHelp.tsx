import React from 'react';

import { Button } from '@/shared/ui/button';

function FaqHelp() {
  return (
    <>
      {/* 추가 도움말 섹션 */}
      <div className="text-center mt-16 p-8 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">원하는 답변을 찾지 못하셨나요?</h3>
        <p className="text-gray-600 mb-6">고객지원팀이 직접 도움을 드리겠습니다.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default">문의하기</Button>
          <Button variant="outline">실시간 채팅</Button>
        </div>
      </div>
    </>
  );
}

export default FaqHelp;
