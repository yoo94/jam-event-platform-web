import React from 'react';

import { TabsContent } from '@/shared/ui/tabs';

function Contact() {
  return (
    <TabsContent value="contact" className="mt-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">📞 전화 문의</h3>
              <p className="text-2xl font-bold text-primary mb-2">1588-1234</p>
              <p className="text-gray-600">평일 09:00 - 18:00</p>
              <p className="text-gray-600">토요일 09:00 - 13:00</p>
              <p className="text-gray-600 text-sm">일요일, 공휴일 휴무</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">✉️ 이메일 문의</h3>
              <p className="text-lg font-semibold text-primary mb-2">support@eventjam.com</p>
              <p className="text-gray-600">24시간 접수 가능</p>
              <p className="text-gray-600 text-sm">영업일 기준 24시간 내 답변</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">🏢 회사 정보</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">회사명:</span> (주)이벤트잼
                </p>
                <p>
                  <span className="font-medium">대표자:</span> 홍길동
                </p>
                <p>
                  <span className="font-medium">사업자등록번호:</span> 123-45-67890
                </p>
                <p>
                  <span className="font-medium">주소:</span> 서울시 강남구 테헤란로 123
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">⏰ 운영 시간</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">평일:</span> 09:00 - 18:00
                </p>
                <p>
                  <span className="font-medium">토요일:</span> 09:00 - 13:00
                </p>
                <p>
                  <span className="font-medium">일요일:</span> 휴무
                </p>
                <p>
                  <span className="font-medium">공휴일:</span> 휴무
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}

export default Contact;
