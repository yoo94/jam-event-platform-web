import {
  BellIcon,
  CalendarIcon,
  CheckCircleIcon,
  MessageCircleIcon,
  QrCodeIcon,
  UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

export default function AboutPage() {
  const features = [
    {
      icon: <CalendarIcon className="h-10 w-10 text-primary" />,
      title: '이벤트 생성 및 관리',
      description:
        '모임, 스터디, 세미나 등을 손쉽게 생성하고 관리하세요. 온라인/오프라인 모드 모두 지원합니다.',
    },
    {
      icon: <UsersIcon className="h-10 w-10 text-primary" />,
      title: '초대 및 RSVP 관리',
      description:
        '링크 공유 또는 사용자 초대로 참석자를 모으고, 참석 여부를 효율적으로 관리하세요.',
    },
    {
      icon: <BellIcon className="h-10 w-10 text-primary" />,
      title: '알림 기능',
      description:
        '이벤트 전 리마인더와 변경 사항 발생 시 자동 알림으로 중요한 일정을 놓치지 마세요.',
    },
    {
      icon: <MessageCircleIcon className="h-10 w-10 text-primary" />,
      title: '참여자 커뮤니케이션',
      description: '댓글, 공지사항, 투표 기능으로 참여자들과 원활하게 소통하세요.',
    },
    {
      icon: <QrCodeIcon className="h-10 w-10 text-primary" />,
      title: 'QR코드 출석 체크',
      description: '스마트한 QR코드 출석 체크로 참석 관리를 간편하게 하세요.',
    },
    {
      icon: <CheckCircleIcon className="h-10 w-10 text-primary" />,
      title: '익명 후기 작성',
      description: '참여자들의 솔직한 피드백을 익명으로 수집하여 다음 이벤트를 더 개선해보세요.',
    },
  ];

  return (
    <div className="container py-12 px-4 mx-auto">
      {/* 히어로 섹션 */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            모임을 <span className="text-primary">더 쉽게</span>, 이벤트를{' '}
            <span className="text-primary">더 멋지게</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            지인들과의 모임, 스터디, 동호회, 세미나 등 크고 작은 이벤트를 쉽고 효율적으로 기획하고
            관리하세요. 모든 과정이 간편해집니다.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/default-image.png"
            width={500}
            height={400}
            alt="이벤트 플랫폼 일러스트레이션"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 사용 방법 섹션 */}
      <section className="mb-16 bg-muted/50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8">이렇게 사용하세요</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                1
              </div>
              <p className="font-medium">계정 생성 & 로그인</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                2
              </div>
              <p className="font-medium">이벤트 정보 입력</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                3
              </div>
              <p className="font-medium">참가자 초대</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                4
              </div>
              <p className="font-medium">이벤트 진행 & 관리</p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/images/default-image.png"
              width={400}
              height={300}
              alt="이벤트 사용 방법"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 후기 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">사용자 후기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(testimonial => (
            <Card key={testimonial} className="bg-secondary/10">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                  <div>
                    <CardTitle className="text-lg">사용자 {testimonial}</CardTitle>
                    <CardDescription>이벤트 주최자</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  &quot;이 플랫폼을 사용하기 전에는 이벤트 관리에 많은 시간을 소비했지만, 이제는
                  모든 것이 간편해졌습니다. 특히 참석 확인과 알림 기능이 정말 유용해요!&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="text-center bg-primary text-primary-foreground p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
        <p className="mb-6 max-w-lg mx-auto">
          더 이상 복잡한 이벤트 관리로 스트레스 받지 마세요. 우리 플랫폼과 함께 쉽고 효율적인 이벤트
          관리를 경험해보세요.
        </p>
        <Button size="lg" variant="secondary">
          <Link href="/signup">무료로 시작하기</Link>
        </Button>
      </section>
    </div>
  );
}
