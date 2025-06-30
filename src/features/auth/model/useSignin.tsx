import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { SigninFormValues } from '@/shared/types/auth';

import { signinSchema } from '../../zodSchema/SigninSchema';

export function useSignin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SigninFormValues) => {
    try {
      setIsLoading(true);
      setError(null);

      // API 호출 로직
      // 예시: 실제로는 여기에 fetch 또는 axios를 사용해 API 요청을 보냄

      // 서버 응답 대기를 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1000));
      return data; // 성공적으로 로그인된 경우 데이터 반환
      // 로그인 성공 처리

      // 추후 로그인 성공 시 처리 로직 추가 (토큰 저장, 리다이렉트 등)
    } catch (err) {
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  // 소셜 로그인 핸들러
  const handleGoogleLogin = () => {
    // 구글 OAuth 로직 구현
  };

  const handleKakaoLogin = () => {
    // 카카오 OAuth 로직 구현
  };

  const handleNaverLogin = () => {
    // 네이버 OAuth 로직 구현
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting: isLoading || isSubmitting,
    error,
    handleGoogleLogin,
    handleKakaoLogin,
    handleNaverLogin,
  };
}
