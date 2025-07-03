import React from 'react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

interface EventFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function EventFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}: EventFilterProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* 검색 영역 */}
      <div className="max-w-md">
        <Input
          type="text"
          placeholder="이벤트 제목, 내용으로 검색하세요..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-3">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'bg-primary/90' : ''}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default EventFilter;
