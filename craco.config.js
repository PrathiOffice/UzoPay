module.exports = {
  devServer: (devServerConfig) => {
    devServerConfig.allowedHosts = ['local.uzopay'];
    return devServerConfig;
  },
};
