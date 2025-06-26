import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LogoProps {
  width: number;
  height: number;
}

function Logo({ width, height }: LogoProps) {
  return (
    <>
      <Link href="/">
        <Image src="/images/logo.png" alt="EventJAM Logo" width={width} height={height} />
      </Link>
    </>
  );
}

export default Logo;
