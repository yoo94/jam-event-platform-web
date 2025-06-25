import Link from 'next/link';
import React from 'react';

import { Button } from '@/widgets/components/ui/button';

function BottomBanner() {
  return (
    <>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">지금 시작하세요</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          EventJAM과 함께 더 쉽고 효율적인 이벤트 관리를 경험해보세요. 무료로 시작할 수 있습니다.
        </p>
        <Button size="lg" asChild>
          <Link href="/register">무료로 시작하기</Link>
        </Button>
      </div>
    </>
  );
}

export default BottomBanner;
