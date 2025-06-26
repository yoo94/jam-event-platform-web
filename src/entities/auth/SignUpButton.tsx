import Link from 'next/link';
import React from 'react';
function SignInButton() {
  return (
    <p className="text-blue-600">
      <span className="transition-all duration-300 group-hover:font-bold group-hover:scale-105 inline-block group-hover:text-blue-800">
        <Link href="/auth/signin">계정이 없으신가요? ▶ 회원가입</Link>
      </span>
    </p>
  );
}

export default SignInButton;
