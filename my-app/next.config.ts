import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https', // Allowed protocol
        hostname: '*', // Allow images from any host
        pathname: '/**', // Allow all paths
      },
    ]
  }
};

export default nextConfig;
