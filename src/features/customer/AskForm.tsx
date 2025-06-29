import React from 'react';

import { SelectField, TextAreaField, TextField } from '@/entities/customer/AskFormField';
import { useAskForm } from '@/features/customer/model/useAskForm';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
function AskForm() {
  const { form, onSubmit, isSubmitting } = useAskForm();

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <TextField
            control={form.control}
            name="name"
            label="이름"
            placeholder="이름을 입력해주세요"
          />

          <TextField
            control={form.control}
            name="email"
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
          />

          <SelectField
            control={form.control}
            name="type"
            label="문의 유형"
            placeholder="선택해주세요"
            options={[
              { value: 'event', label: '이벤트 관련' },
              { value: 'payment', label: '결제/환불' },
              { value: 'technical', label: '기술적 문제' },
              { value: 'other', label: '기타' },
            ]}
          />

          <TextField
            control={form.control}
            name="title"
            label="제목"
            placeholder="문의 제목을 입력해주세요"
          />

          <TextAreaField
            control={form.control}
            name="content"
            label="내용"
            placeholder="문의 내용을 자세히 입력해주세요"
            className="min-h-[120px]"
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? '접수 중...' : '문의하기'}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default AskForm;
