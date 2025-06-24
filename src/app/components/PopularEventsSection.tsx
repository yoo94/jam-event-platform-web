import { popularEvents } from '@/mock/main';
import { EventCard } from '@/widgets/components/card/EventCard';
import { Section } from '@/widgets/components/section';

interface PopularEventsSectionProps {
  limit?: number;
}

export function PopularEventsSection({ limit }: PopularEventsSectionProps) {
  const eventsToDisplay = limit ? popularEvents.slice(0, limit) : popularEvents;

  return (
    <Section title="인기 이벤트">
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
    </Section>
  );
}
