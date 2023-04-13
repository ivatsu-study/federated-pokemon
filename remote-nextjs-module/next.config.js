const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote_nextjs_module",
        filename: `static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        exposes: {
          "./Pikachu": "./components/Pikachu.js",
        },
      })
    );

    return config;
  },
};
