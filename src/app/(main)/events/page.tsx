import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { events } from '@/shared/mock/events';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardFooter } from '@/shared/ui/card';

export default function EventsPage() {
  return (
    <div className="container mx-auto py-8">
      {/* 페이지 헤더 */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">이벤트</h1>
        <p className="text-gray-600">다가오는 이벤트 목록을 확인하세요</p>
      </div>

      {/* 필터 영역 */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Button variant="outline" className="bg-primary/5">
          모든 이벤트
        </Button>
        <Button variant="outline">컨퍼런스</Button>
        <Button variant="outline">워크샵</Button>
        <Button variant="outline">세미나</Button>
        <Button variant="outline">네트워킹</Button>
      </div>

      {/* 이벤트 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <Card
            key={event.id}
            className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            {/* 이벤트 이미지 */}
            <div className="relative h-48 bg-gray-100">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <CardContent className="p-5">
              <div className="text-sm text-primary font-semibold mb-1">{event.category}</div>
              <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {event.schedule}
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {event.location}
              </div>
            </CardContent>

            <CardFooter className="mt-auto p-5 pt-0">
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/events/${event.id}`}>자세히 보기</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
          <Button variant="outline" size="sm" className="bg-primary/10">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
