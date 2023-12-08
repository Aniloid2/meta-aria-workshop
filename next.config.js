/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "img.ltwebstatic.com",
      "lh3.googleusercontent.com",
      "ilikeyourstyle.s3.amazonaws.com",
    ],
  },
  // Add other configurations here if needed
};

module.exports = nextConfig;
