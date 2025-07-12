import { signupAPI } from '@/infra/api/auth';

export function useSignup() {

  const signup = async (form: {
    email: string;
    name: string;
    nickname: string;
    password: string;
  }) => {
    try {
      await signupAPI(form);
      alert('회원가입 성공');
    } catch (e: any) {
      console.log('e >>', e)
      alert('회원가입 실패');
    } 
  };

  return { signup };
}