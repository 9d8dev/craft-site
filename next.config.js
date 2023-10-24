/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.tsx?$/,
        use: "raw-loader",
        include: [require('path').resolve(__dirname, "./app/components")],
      });
    }
    return config;
  },
};

module.exports = nextConfig;
