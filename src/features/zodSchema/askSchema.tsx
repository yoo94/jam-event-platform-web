import { z } from 'zod';

export const askSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  email: z.string().email('올바른 이메일 형식을 입력해주세요'),
  type: z.string().min(1, '문의 유형을 선택해주세요'),
  title: z.string().min(1, '제목을 입력해주세요'),
  content: z.string().min(10, '내용을 10자 이상 입력해주세요'),
});

export type AskFormData = z.infer<typeof askSchema>;
