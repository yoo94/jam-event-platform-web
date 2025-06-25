import Link from 'next/link';

import { Button } from '@/widgets/components/ui/button';

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

        {/* 주요 기능 섹션 */}
        <section className="py-20 w-full bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">주요 기능</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                EventJAM은 이벤트 기획부터 피드백까지 모든 과정을 지원합니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: '이벤트 생성 및 관리',
                  description: '온/오프라인 이벤트를 쉽게 생성하고 관리하세요',
                  icon: '📅',
                },
                {
                  title: '초대 및 RSVP',
                  description: '링크 공유나 직접 초대로 손쉽게 참가자를 모집하세요',
                  icon: '✉️',
                },
                {
                  title: '알림 기능',
                  description: '이벤트 전 리마인더와 변경사항을 자동으로 알려드려요',
                  icon: '🔔',
                },
                {
                  title: '참여자 커뮤니케이션',
                  description: '댓글, 공지사항, 투표 기능으로 소통하세요',
                  icon: '💬',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border hover:shadow-md transition"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 추천 이벤트 섹션 */}
        <section className="py-20 w-full bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">인기 이벤트</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                지금 참여할 수 있는 다양한 이벤트를 확인해보세요
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <div className="relative h-48 bg-gray-100"></div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">
                      {['스터디', '세미나', '동호회'][index]}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {
                        ['프론트엔드 개발자 모임', '디자인 시스템 워크샵', '테크 네트워킹 파티'][
                          index
                        ]
                      }
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {
                        [
                          '매주 화요일 저녁 7시',
                          '6월 15일 토요일 오후 2시',
                          '6월 30일 금요일 저녁 6시',
                        ][index]
                      }
                    </p>
                    <Button variant="outline" className="w-full">
                      자세히 보기
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/events">더 많은 이벤트 보기</Link>
              </Button>
            </div>
          </div>
        </section>

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
