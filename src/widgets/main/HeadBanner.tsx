import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/shared/ui/button';

function HeadBanner() {
  return (
    <>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6">
            이벤트 관리를 쉽고 효율적으로
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            모임, 스터디, 동호회, 세미나 등 다양한 이벤트를 한 곳에서 기획하고 관리하세요. 초대부터
            피드백까지 모든 과정을 간편하게 처리할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/events">이벤트 탐색하기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/createEvent">이벤트 만들기</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image src={'/images/default-image.png'} alt={'Default Event Image'} fill />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadBanner;
