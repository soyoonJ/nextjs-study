/** @type {import('next').NextConfig} */
const API_KEY = "37a573fcd45b75bb928744debd503fb1";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      // 적용하려면 서버 재시작 해야 함
      // 동적 /:path, /:path*(모든 주소 전체 가져감)
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  // url에서 변화는 없음 => api키 숨기기 위해 사용
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        // source와 destination의 :id는 동일한 명칭이어야 함
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
