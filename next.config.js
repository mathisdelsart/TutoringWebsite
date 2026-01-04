/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath sera injecté automatiquement par actions/configure-pages
  // En local, il sera undefined (ce qui est correct)
};

module.exports = nextConfig;
