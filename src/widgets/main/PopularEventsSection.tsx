import Link from 'next/link';

import { EventCard } from '@/entities/main/EventCard';
import { popularEvents } from '@/shared/mock/main';
import { Button } from '@/shared/ui/button';
import { Section } from '@/shared/ui/custom/Section';

interface PopularEventsSectionProps {
  limit?: number;
}

export function PopularEventsSection({ limit }: PopularEventsSectionProps) {
  const eventsToDisplay = limit ? popularEvents.slice(0, limit) : popularEvents;

  return (
    <Section title="인기 이벤트" description="지금 참여할 수 있는 다양한 이벤트를 확인해보세요">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {eventsToDisplay.map((event, index) => (
          <EventCard
            key={index}
            category={event.category}
            title={event.title}
            schedule={event.schedule}
            image={event.image}
            href={`/events/${index}`}
          />
        ))}
      </div>
      <div className="text-center mt-12 relative">
        <Button variant="outline" asChild>
          <Link href="/events">더 많은 이벤트 보기</Link>
        </Button>
      </div>
    </Section>
  );
}
