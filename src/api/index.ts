const API_HOST = `http://api-werone.itkoo.kr/api`;

// Kakko
const KAKAO_CLIENT_ID = `999fbe6f90c7394d03fd2e03ea5df4d1`;
export const KAKAO_REDIRECT_URL = `http://api-werone.itkoo.kr/auth/kakao`;
export const KAKAO_API_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}`;

export default API_HOST;
