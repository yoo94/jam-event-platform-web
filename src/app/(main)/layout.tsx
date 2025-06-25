import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/widgets/layout/Footer';
import Header from '@/widgets/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JAM EVENT',
  description: 'JAM EVENT 플랫폼',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header /> {/* 헤더를 고정 */}
          <main className="flex-grow pt-24">
            {' '}
            {/* 헤더 높이만큼 상단 패딩 추가 */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
