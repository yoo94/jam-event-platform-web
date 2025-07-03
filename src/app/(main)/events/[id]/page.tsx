import Image from 'next/image';
import React from 'react';

import { events } from '@/shared/mock/events';
import { Button } from '@/shared/ui/button';

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = events.find(e => e.id === params.id);

  if (!event) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">이벤트를 찾을 수 없습니다</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">이벤트: {event.title}</h1>

      {/* 이벤트 상세 내용 */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 이벤트 이미지 */}
          <div className="w-full md:w-1/2 h-64 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              width={500}
              height={300}
              className="object-cover"
            />
          </div>

          {/* 이벤트 정보 */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">카테고리</h3>
                <p>{event.category}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">일시</h3>
                <p>{event.schedule}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">장소</h3>
                <p>{event.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">주최</h3>
                <p>{event.host}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">참가비</h3>
                <p>{event.fee}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 이벤트 설명 */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">이벤트 설명</h3>
          <p className="text-gray-600">{event.description}</p>
        </div>

        {/* 참가 신청 버튼 */}
        <div className="mt-8">
          <Button className="w-full md:w-auto px-8 py-3">참가 신청하기</Button>
        </div>
      </div>
    </div>
  );
}
