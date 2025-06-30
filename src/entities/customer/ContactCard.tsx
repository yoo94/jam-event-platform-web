import React from 'react';

interface ContactCardProps {
  title: string;
  subtitle?: string;
  descriptions: string[];
  className?: string;
}

function ContactCard({ title, subtitle, descriptions, className = '' }: ContactCardProps) {
  return (
    <div className={`border rounded-lg p-6 ${className}`}>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      {subtitle && <p className="text-lg font-semibold text-primary mb-2">{subtitle}</p>}
      <div className="space-y-2 text-gray-600">
        {descriptions.map((description, index) => (
          <p key={index} className={index === descriptions.length - 1 ? 'text-sm' : ''}>
            {description}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ContactCard;
