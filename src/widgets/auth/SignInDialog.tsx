import React from 'react';

import SignInButton from '@/entities/auth/SignInButton';
import SigninForm from '@/entities/auth/SignInForm';
import SignUpButton from '@/entities/auth/SignUpButton';
import SocialLoginButton from '@/entities/auth/SocialLoginButton';
import Logo from '@/entities/main/Logo';
import { useSignin } from '@/features/auth/model/useSignin';

interface SignInDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function SignInDialog({ isOpen, onClose }: SignInDialogProps) {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    error,
    handleGoogleLogin,
    handleKakaoLogin,
    handleNaverLogin,
  } = useSignin();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <Logo width={150} height={50} />
          <div>로그인 후 이벤트 JAM을 이용해보세요!</div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            disabled={isSubmitting}
          >
            <span className="sr-only">닫기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <SigninForm register={register} errors={errors} isSubmitting={isSubmitting} />

          <div className="mt-6">
            <SignInButton isSubmitting={isSubmitting} />
          </div>

          <div className="mt-6">
            <SocialLoginButton
              onGoogleLogin={handleGoogleLogin}
              onKakaoLogin={handleKakaoLogin}
              onNaverLogin={handleNaverLogin}
              isDisabled={isSubmitting}
            />
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          <SignUpButton />
        </div>
      </div>
    </div>
  );
}

export default SignInDialog;
