// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',       // when user visits /
        destination: '/products', // redirect them to /product
        permanent: true,   // use false if you might change it later
      },
    ];
  },
};

module.exports = nextConfig;
