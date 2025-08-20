const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/landing-page-project' : '',
  assetPrefix: isProd ? '/landing-page-project/' : '',
  trailingSlash: true,
};

export default nextConfig;
