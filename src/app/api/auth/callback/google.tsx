'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    // 인증 후 원하는 페이지로 리디렉션
    router.replace('/');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <span>구글 인증 처리 중...</span>
    </div>
  );
}
