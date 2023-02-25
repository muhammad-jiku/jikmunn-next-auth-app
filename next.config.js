/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // development
    // appDir: false, // production
  },
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**images.unsplash.com',
    //   },
    // ],
  },
  // env: {
  //   DB_URI: `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASS}@cluster0.nstalsd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  //   NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  // },
};

module.exports = nextConfig;

//  module.exports = {
//   nextConfig,
//   basePath: '/user',
//  };
