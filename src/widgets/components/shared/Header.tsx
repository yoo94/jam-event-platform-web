import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/widgets/components/ui/button';

const Header = () => {
  return (
    <header className="border-b bg-white fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-4xl font-bold text-primary">
          <Image
            src="/images/logo.png"
            alt="EventJAM Logo"
            width={150}
            height={100}
            className="ml-2"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Button>
            <Link href="/events">이벤트 찾기</Link>
          </Button>
          <Button>
            <Link href="/create">이벤트 만들기</Link>
          </Button>
          <Button>
            <Link href="/about">서비스 소개</Link>
          </Button>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
