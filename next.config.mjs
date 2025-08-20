// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/landing-page-project' : '',
  assetPrefix: isProd ? '/landing-page-project/' : '',
  trailingSlash: true,
};

export default nextConfig;
