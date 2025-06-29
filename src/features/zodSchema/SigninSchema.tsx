import { z } from 'zod';

// Zod 스키마 정의
export const signinSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
  password: z
    .string()
    .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
    .refine(
      password => /[!@#$%^&*(),.?":{}|<>]/.test(password),
      '비밀번호는 최소 1개의 특수문자를 포함해야 합니다'
    ),
});
