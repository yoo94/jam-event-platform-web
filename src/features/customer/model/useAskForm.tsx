import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { type AskFormData, askSchema } from '@/features/zodSchema/askSchema';

export const useAskForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AskFormData>({
    resolver: zodResolver(askSchema),
    defaultValues: {
      name: '',
      email: '',
      type: '',
      title: '',
      content: '',
    },
  });

  const onSubmit = async (data: AskFormData) => {
    try {
      setIsSubmitting(true);
      // 임시 지연 (실제 API 호출로 대체)
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('문의가 성공적으로 접수되었습니다.');
      return data;
      form.reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      alert(`문의 접수 중 오류가 발생했습니다: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting,
  };
};
