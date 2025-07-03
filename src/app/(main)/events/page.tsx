'use client';

import React from 'react';

import EventFilter from '@/entities/event/EventFilter';
import EventPagination from '@/entities/event/EventPagination';
import { EventCard } from '@/entities/main/EventCard';
import { useEventFilter } from '@/features/event/model/useEventFilter';

export default function EventsPage() {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedEvents,
    totalEvents,
  } = useEventFilter();

  return (
    <div className="container mx-auto py-8">
      {/* 페이지 헤더 */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">이벤트</h1>
        <p className="text-gray-600">
          다가오는 이벤트 목록을 확인하세요 ({totalEvents}개의 이벤트)
        </p>
      </div>

      {/* 필터 및 검색 영역 */}
      <EventFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 이벤트 카드 그리드 */}
      {paginatedEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedEvents.map(event => (
            <EventCard
              key={event.id}
              title={event.title}
              category={event.category}
              schedule={event.schedule}
              image={event.image}
              href={`/events/${event.id}`}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
          <p className="text-gray-400 mt-2">다른 검색어나 필터를 시도해보세요.</p>
        </div>
      )}

      {/* 페이지네이션 */}
      <EventPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
