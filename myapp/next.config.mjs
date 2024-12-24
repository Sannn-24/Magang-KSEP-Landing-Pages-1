/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['www.figma.com'], // Allow the domain you're fetching images from
  },
};

export default nextConfig;
