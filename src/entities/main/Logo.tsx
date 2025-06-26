import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <>
      <Link href="/" className="text-4xl font-bold text-primary">
        <Image
          src="/images/logo.png"
          alt="EventJAM Logo"
          width={150}
          height={100}
          className="ml-2"
        />
      </Link>
    </>
  );
}

export default Logo;
