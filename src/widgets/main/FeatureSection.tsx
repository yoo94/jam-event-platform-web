import { FeatureCard } from '@/entities/main/FeatureCard';
import { features } from '@/shared/mock/main';
import { Section } from '@/shared/ui/custom/Section';

export function FeatureSection() {
  return (
    <Section title="주요 기능">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </Section>
  );
}
