/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기존 설정들...
  productionBrowserSourceMaps: false, // 프로덕션 빌드에서도 소스맵 생성
  webpack: (config, { dev, isServer }) => {
    // 개발 모드에서는 항상 소스맵을 활성화
    if (dev) {
      config.devtool = 'source-map';
    }
    return config;
  },
  images: {
    domains: ['localhost'], // 이미지 호스트 도메인 추가
    unoptimized: true, // 로컬 개발 시 테스트용으로 이미지 최적화 비활성화
  },
};

module.exports = nextConfig;
