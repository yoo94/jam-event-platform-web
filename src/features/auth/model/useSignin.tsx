import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { SigninFormValues } from '@/entities/auth/SignInForm';

// Zod 스키마 정의
const signinSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
  password: z
    .string()
    .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
    .refine(
      password => /[!@#$%^&*(),.?":{}|<>]/.test(password),
      '비밀번호는 최소 1개의 특수문자를 포함해야 합니다'
    ),
});

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
      console.log('로그인 시도:', data);

      // 서버 응답 대기를 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 로그인 성공 처리
      console.log('로그인 성공!');

      // 추후 로그인 성공 시 처리 로직 추가 (토큰 저장, 리다이렉트 등)
    } catch (err) {
      console.error('로그인 실패:', err);
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  // 소셜 로그인 핸들러
  const handleGoogleLogin = () => {
    console.log('구글 로그인 시도');
    // 구글 OAuth 로직 구현
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시도');
    // 카카오 OAuth 로직 구현
  };

  const handleNaverLogin = () => {
    console.log('네이버 로그인 시도');
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
