/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
    loader: "custom",
    path: "/",
  },
};

module.exports = nextConfig;
