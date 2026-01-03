/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ProfPage",
  assetPrefix: "/ProfPage/",
};

module.exports = nextConfig;
