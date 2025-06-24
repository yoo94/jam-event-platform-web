import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-15 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">EventJAM</h3>
            <p className="text-gray-600 text-sm mb-4">
              이벤트를 쉽고 효율적으로 기획하고 관리하고, 공유하고, 홍보하는 플랫폼
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-2">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="text-gray-600 hover:text-primary">
                  이벤트 찾기
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-gray-600 hover:text-primary">
                  이벤트 만들기
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-primary">
                  요금제
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">고객지원</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-primary">
                  도움말
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">법적 정보</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} EventJAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
