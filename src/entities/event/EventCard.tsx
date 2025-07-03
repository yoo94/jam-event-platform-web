import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardFooter } from '@/shared/ui/card';

interface EventProps {
  id: string;
  title: string;
  category: string;
  schedule: string;
  location: string;
  image: string;
  host: string;
  fee: string;
  description: string;
}

function EventCard({ key, event }: { key: string; event: EventProps }) {
  return (
    <>
      <Card
        key={key}
        className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
      >
        {/* 이벤트 이미지 */}
        <div className="relative h-48 bg-gray-100">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <CardContent className="p-5">
          <div className="text-sm text-primary font-semibold mb-1">{event.category}</div>
          <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {event.schedule}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {event.location}
          </div>
        </CardContent>

        <CardFooter className="mt-auto p-5 pt-0">
          <Link href={`/events/${event.id}`}>
            <Button variant="outline" className="w-full">
              자세히 보기
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default EventCard;
