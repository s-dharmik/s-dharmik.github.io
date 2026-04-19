/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
  
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;