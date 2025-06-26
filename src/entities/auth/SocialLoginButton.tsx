import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/button';
import { Separator } from '@/shared/ui/separator';

interface SocialLoginButtonProps {
  onGoogleLogin: () => void;
  onKakaoLogin: () => void;
  onNaverLogin: () => void;
  isDisabled?: boolean;
}

function SocialLoginButton({
  onGoogleLogin,
  onKakaoLogin,
  onNaverLogin,
  isDisabled = false,
}: SocialLoginButtonProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">또는</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* 구글 로그인 */}
        <Button
          onClick={onGoogleLogin}
          disabled={isDisabled}
          className="flex gap-2 justify-center"
          style={{ backgroundColor: '#4285F4', color: 'white', height: '50px' }}
        >
          <Image src="/images/login/btn-google.png" alt="구글 로그인" width={24} height={24} />
          <span>구글 로그인</span>
        </Button>
        {/* 네이버 로그인 */}
        <Button
          onClick={onNaverLogin}
          disabled={isDisabled}
          className="flex gap-2 justify-center"
          style={{ backgroundColor: '#03C75A', color: 'white', height: '50px' }}
        >
          <Image src="/images/login/btn-naver.png" alt="네이버 로그인" width={24} height={24} />
          <span>네이버 로그인</span>
        </Button>

        {/* 카카오 로그인 */}
        <Button
          onClick={onKakaoLogin}
          disabled={isDisabled}
          className="flex gap-2 justify-center"
          style={{ backgroundColor: '#FEE500', color: 'black', height: '50px' }}
        >
          <Image src="/images/login/btn-kakao.png" alt="카카오 로그인" width={24} height={24} />
          <span>카카오 로그인</span>
        </Button>
      </div>
    </div>
  );
}

export default SocialLoginButton;
