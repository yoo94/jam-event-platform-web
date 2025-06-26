import Image from 'next/image';
import React from 'react';

import { SocialProvider } from '@/shared/types/auth';
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
  const socialProviders: SocialProvider[] = [
    {
      name: '구글',
      onClick: onGoogleLogin,
      backgroundColor: '#4285F4',
      textColor: 'white',
      iconSrc: '/images/login/btn-google.png',
    },
    {
      name: '네이버',
      onClick: onNaverLogin,
      backgroundColor: '#03C75A',
      textColor: 'white',
      iconSrc: '/images/login/btn-naver.png',
    },
    {
      name: '카카오',
      onClick: onKakaoLogin,
      backgroundColor: '#FEE500',
      textColor: 'black',
      iconSrc: '/images/login/btn-kakao.png',
    },
  ];

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
        {socialProviders.map(provider => (
          <Button
            key={provider.name}
            onClick={provider.onClick}
            disabled={isDisabled}
            className="flex gap-2 justify-center"
            style={{
              backgroundColor: provider.backgroundColor,
              color: provider.textColor,
              height: '50px',
              borderRadius: '9999px',
            }}
          >
            <Image src={provider.iconSrc} alt={`${provider.name} 로그인`} width={24} height={24} />
            <span>{provider.name} 로그인</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default SocialLoginButton;
