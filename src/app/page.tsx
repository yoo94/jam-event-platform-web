import Link from 'next/link';

import { Button } from '@/widgets/components/ui/button';

import { FeatureSection } from './components/FeatureSection';
import { PopularEventsSection } from './components/PopularEventsSection';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        {/* 히어로 섹션 */}
        <section className="w-full bg-gradient-to-r from-primary/10 to-primary/5 pt-32 pb-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                이벤트 관리를 <span className="text-primary">쉽고 효율적</span>으로
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                모임, 스터디, 동호회, 세미나 등 다양한 이벤트를 한 곳에서 기획하고 관리하세요.
                초대부터 피드백까지 모든 과정을 간편하게 처리할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/events">이벤트 탐색하기</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/create">이벤트 만들기</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-xl"></div>
            </div>
          </div>
        </section>
        <div className="container mx-auto py-12">
          <div className="mb-32">
            <FeatureSection />
          </div>
          <div className="mt-12">
            <PopularEventsSection />
          </div>
        </div>
        {/* CTA 섹션 */}
        <section className="py-20 w-full bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">지금 시작하세요</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              EventJAM과 함께 더 쉽고 효율적인 이벤트 관리를 경험해보세요. 무료로 시작할 수
              있습니다.
            </p>
            <Button size="lg" asChild>
              <Link href="/register">무료로 시작하기</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
