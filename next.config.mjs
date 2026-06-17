/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.mgsarchitecture.in' },
      { protocol: 'https', hostname: 'image.made-in-china.com' },
    ],
  },
};

export default nextConfig;