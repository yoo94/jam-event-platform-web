import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('User signed in:', user);
      console.log('Account:', account);
      console.log('Profile:', profile);
      // 여기서 DB에 사용자 정보 저장(회원가입) 또는 추가 처리
      // 예: await saveUserToDB(user, profile);
      return true; // true면 로그인 허용, false면 거부
    },
    async session({ session, token, user }) {
      // 세션에 사용자 정보 추가
      console.log('Session:', session);
      console.log('Token:', token);
      console.log('User:', user);
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // JWT 토큰에 정보 추가
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  // 필요시 session, jwt 등 옵션 추가
});

export { handler as GET, handler as POST };
