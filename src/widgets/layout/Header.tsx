'use client';
import Link from 'next/link';
import { useState } from 'react';

import Logo from '@/entities/main/Logo';
import { Button } from '@/shared/ui/button';
import SignInDialog from '@/widgets/auth/SignInDialog';

const Header = () => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  return (
    <header className="border-b bg-white w-full sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" asChild>
            <Link href="/events">이벤트 찾기</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/createEvent">이벤트 만들기</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">서비스 소개</Link>
          </Button>
          <Button onClick={() => setIsLoginDialogOpen(true)}>로그인/회원가입</Button>
        </nav>
      </div>
      <SignInDialog isOpen={isLoginDialogOpen} onClose={() => setIsLoginDialogOpen(false)} />
    </header>
  );
};
export default Header;
