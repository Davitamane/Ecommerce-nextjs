/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.redseam.redberryinternship.ge"], // whitelist your API host
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
