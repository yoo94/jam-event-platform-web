import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

export type SigninFormValues = {
  email: string;
  password: string;
};

interface SigninFormProps {
  register: UseFormRegister<SigninFormValues>;
  errors: FieldErrors<SigninFormValues>;
  isSubmitting: boolean;
}

function SigninForm({ register, errors, isSubmitting }: SigninFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="example@email.com"
          disabled={isSubmitting}
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          {...register('password')}
          placeholder="비밀번호 입력"
          disabled={isSubmitting}
        />
        {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
      </div>
    </div>
  );
}

export default SigninForm;
