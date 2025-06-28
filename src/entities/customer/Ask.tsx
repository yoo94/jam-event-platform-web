import React from 'react';

import { TabsContent } from '@/shared/ui/tabs';

function Ask() {
  return (
    <TabsContent value="inquiry" className="mt-6">
      <div className="flex justify-center items-center min-h-[600px]">
        <div className="w-full max-w-2xl px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">문의하기</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">이름</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="이름을 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">이메일</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="이메일을 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">문의 유형</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>선택해주세요</option>
                <option>이벤트 관련</option>
                <option>결제/환불</option>
                <option>기술적 문제</option>
                <option>기타</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">제목</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="문의 제목을 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">내용</label>
              <textarea
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="문의 내용을 자세히 입력해주세요"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              문의하기
            </button>
          </form>
        </div>
      </div>
    </TabsContent>
  );
}

export default Ask;
