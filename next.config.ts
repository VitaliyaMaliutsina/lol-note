import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @use "@/styles/mixins" as *;
      @use "@/styles/width" as *;
    `,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        port: "",
        pathname: "/cdn/**",
      },
    ],
  },
};

export default nextConfig;
