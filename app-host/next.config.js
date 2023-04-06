const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = {
  ...nextConfig,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "app-host",
          filename: `static/chunks/remoteEntry.js`,
          remotes: {
            "app-host":
              "app-host@http://localhost:3000/_next/static/chunks/remoteEntry.js",
          },
          exposes: {},
          shared: {},
        })
      );
    }
    return config;
  },
};
