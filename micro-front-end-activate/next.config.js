const { withModuleFederation } = require("@module-federation/nextjs-mf");
module.exports = {
  future: { webpack5: true },
  images: {
    domains: ["upload.wikimedia.org", "miro.medium.com"],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "app2",
      library: {
        type: config.output.libraryTarget,
        name: "app2",
      },
      filename: "static/runtime/app2remoteEntry.js",
      remotes: {
        shell: "shell",
      },
      exposes: {
        "./mario": "./components/mario",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
