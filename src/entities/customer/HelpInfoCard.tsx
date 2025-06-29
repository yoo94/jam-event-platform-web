import React from 'react';

interface Section {
  title: string;
  items: string[];
}

interface HelpInfoCardProps {
  title: string;
  subtitle?: string;
  descriptions?: string[];
  type?: 'simple' | 'ordered' | 'complex';
  sections?: Section[];
  className?: string;
}

function HelpInfoCard({
  title,
  subtitle,
  descriptions = [],
  type = 'simple',
  sections = [],
  className = '',
}: HelpInfoCardProps) {
  const renderContent = () => {
    switch (type) {
      case 'ordered':
        return (
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {descriptions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        );

      case 'complex':
        return (
          <div className="space-y-3">
            {sections.map((section, index) => (
              <div key={index}>
                <h4 className="font-medium mb-2">{section.title}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      default: // 'simple'
        return (
          <div className="space-y-2 text-gray-600">
            {descriptions.map((description, index) => (
              <p key={index} className={index === descriptions.length - 1 ? 'text-sm' : ''}>
                {description}
              </p>
            ))}
          </div>
        );
    }
  };

  return (
    <div className={`border rounded-lg p-6 ${className}`}>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      {subtitle && <p className="text-lg font-semibold text-primary mb-2">{subtitle}</p>}
      {renderContent()}
    </div>
  );
}

export default HelpInfoCard;
