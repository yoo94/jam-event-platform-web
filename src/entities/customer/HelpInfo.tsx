import React from 'react';

import { TabsContent } from '@/shared/ui/tabs';
function HelpInfo() {
  return (
    <TabsContent value="help" className="mt-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">도움말</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">🎯 이벤트 참여하기</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>회원가입 후 로그인</li>
                <li>원하는 이벤트 선택</li>
                <li>참여하기 버튼 클릭</li>
                <li>참여 정보 입력</li>
                <li>결제 완료</li>
              </ol>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">📝 이벤트 만들기</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>로그인 후 이벤트 만들기 클릭</li>
                <li>이벤트 기본 정보 입력</li>
                <li>상세 내용 및 이미지 추가</li>
                <li>참여비 및 정원 설정</li>
                <li>이벤트 공개</li>
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">💳 결제 및 환불</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">결제 방법</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 신용카드 (국내/해외)</li>
                    <li>• 계좌이체</li>
                    <li>• 간편결제 (카카오페이, 네이버페이)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">환불 정책</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 24시간 전: 100% 환불</li>
                    <li>• 12시간 전: 50% 환불</li>
                    <li>• 이후: 환불 불가</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">🔧 기술 지원</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">브라우저:</span> Chrome, Firefox, Safari 최신 버전
                </p>
                <p>
                  <span className="font-medium">쿠키:</span> 활성화 필요
                </p>
                <p>
                  <span className="font-medium">자바스크립트:</span> 활성화 필요
                </p>
                <p className="text-sm mt-4">문제 발생 시 브라우저 캐시를 삭제해보세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}

export default HelpInfo;
