import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images:{
    unoptimized: true
  }, 
  basePath : '',
  assetPrefix: './',
  trailingSlash : true
  /* config options here */
};

export default nextConfig;
