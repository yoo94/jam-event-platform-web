import { useMemo, useState } from 'react';

import { events } from '@/shared/mock/events';

export const useEventFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('모든 이벤트');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // 카테고리 목록 생성
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(events.map(event => event.category)));
    return ['모든 이벤트', ...uniqueCategories];
  }, []);

  // 필터링된 이벤트 목록
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesCategory =
        selectedCategory === '모든 이벤트' || event.category === selectedCategory;
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredEvents.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredEvents, currentPage, itemsPerPage]);

  // 페이지 변경 시 1페이지로 리셋
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return {
    categories,
    selectedCategory,
    setSelectedCategory: handleCategoryChange,
    searchQuery,
    setSearchQuery: handleSearchChange,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedEvents,
    filteredEvents,
    totalEvents: filteredEvents.length,
  };
};
