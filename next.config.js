module.exports = {
  output: 'export',
  swcMinify: false,
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_BASE_URL:
      process.env.API_BASE_URL,
  }
}
