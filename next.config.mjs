/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fast Refresh 활성화 (기본적으로 켜져있지만 명시적으로 설정)
  reactStrictMode: true,
  // 개발 모드에서 빠른 새로고침
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
