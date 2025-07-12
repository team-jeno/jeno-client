import { http } from '@/shared/lib/http';

type SignupRequest = {
  email: string;
  name: string;
  nickname: string;
  password: string;
};

// 회원가입
export const signupAPI = async (payload: SignupRequest) => {
  try {
    const res = await http.post('/apis/users/signup', payload);
    return res.data;
  } catch (error) {
    console.error(error)
  }
};