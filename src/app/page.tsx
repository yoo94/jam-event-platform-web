import BottomBanner from '../pages/main/BottomBanner';
import { FeatureSection } from '../pages/main/FeatureSection';
import HeadBanner from '../pages/main/HeadBanner';
import { PopularEventsSection } from '../pages/main/PopularEventsSection';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        {/* 히어로 섹션 */}
        <section className="w-full bg-gradient-to-r from-primary/10 to-primary/5 pt-32 pb-20">
          <HeadBanner />
        </section>
        {/* 주요 기능 섹션 */}
        <section className="py-20 w-full bg-white">
          <FeatureSection />
        </section>
        {/* 추천 이벤트 섹션 */}
        <section className="py-20 w-full bg-gray-50">
          <PopularEventsSection />
        </section>
        {/* CTA 섹션 */}
        <section className="py-20 w-full bg-primary/10">
          <BottomBanner />
        </section>
      </main>
    </>
  );
}
