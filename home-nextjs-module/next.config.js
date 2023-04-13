const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "home_nextjs_module",
        filename: `static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        remotes: {
          remote_nextjs_module: `remote_nextjs_module@http://localhost:8081/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};
