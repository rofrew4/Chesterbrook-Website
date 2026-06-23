/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  async redirects() {
    return [
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
