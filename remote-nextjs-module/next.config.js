const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "remote_nextjs_module",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Test": "./components/Test.js",
          },
        })
      );
    }

    return config;
  },
};
