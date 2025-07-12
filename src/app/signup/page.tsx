'use client';

import { useSignup } from "@/features/signup/model";
import React, { useState } from 'react';

type SignupForm = {
  email: string;
  name: string;
  nickname: string;
  password: string;
};

const page = () => {
  const [form, setForm] = useState<SignupForm>({
    email: '',
    name: '',
    nickname: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const { signup } = useSignup(); 

  const handleClickButton = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(form);
  };

  return (
    <div>
      <form onSubmit={handleClickButton}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="이메일"
        />
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름"
        />
        <input
          name="nickname"
          value={form.nickname}
          onChange={handleChange}
          placeholder="닉네임"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}

export default page;
