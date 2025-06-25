import React from 'react';

// 페이지 컴포넌트는 params를 props로 받습니다
export default function EventDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">이벤트 {id}</h1>

      {/* 이벤트 상세 내용 */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-2xl font-semibold mb-4">이벤트 제목</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* 이벤트 이미지 */}
          <div className="w-full md:w-1/2 h-64 bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              이벤트 이미지
            </div>
          </div>

          {/* 이벤트 정보 */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">일시</h3>
                <p>2024년 7월 15일 오후 2:00</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">장소</h3>
                <p>서울특별시 강남구 테헤란로 123</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">주최</h3>
                <p>JAM 이벤트</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">참가비</h3>
                <p>무료</p>
              </div>
            </div>
          </div>
        </div>

        {/* 이벤트 설명 */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">이벤트 설명</h3>
          <p className="text-gray-600">
            이 이벤트는 JAM 스택을 활용한 웹 개발에 관한 내용을 다룹니다. 최신 프론트엔드 기술과
            백엔드 통합 방법에 대해 알아보고, 실제 프로젝트에 적용하는 방법을 배울 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
