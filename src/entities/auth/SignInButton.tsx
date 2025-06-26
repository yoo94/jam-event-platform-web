import React from 'react';

import { Button } from '@/shared/ui/button';

interface SignInButtonProps {
  isSubmitting: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

function SignInButton({ isSubmitting, onClick, type = 'submit' }: SignInButtonProps) {
  return (
    <Button type={type} onClick={onClick} disabled={isSubmitting} className="w-full">
      {isSubmitting ? '로그인 중...' : '로그인'}
    </Button>
  );
}

export default SignInButton;
