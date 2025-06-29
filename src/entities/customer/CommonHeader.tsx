import React from 'react';

interface CommonHeaderProps {
  title: string;
}

function CommonHeader({ title }: CommonHeaderProps) {
  return (
    <>
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
      </div>
    </>
  );
}

export default CommonHeader;
