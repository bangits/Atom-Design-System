const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { configureSharedWebpack } = require('./webpack.shared');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    argv,
    orgName: 'atom',
    projectName: 'design-system',
    webpackConfigEnv
  });

  const isDevelopment = webpackConfigEnv.development;

  defaultConfig.module.rules = defaultConfig.module.rules.map((rule) => {
    if (String(rule.test) === String(/\.(bmp|png|svg|jpg|jpeg|gif|webp)$/i)) {
      return {
        ...rule,
        test: /\.(bmp|png|jpg|jpeg|gif|webp)$/i
      };
    }

    return rule;
  });

  return merge(
    defaultConfig,
    {
      output: {
        publicPath: '/'
      },

      devServer: {
        port: webpackConfigEnv.PORT || 6005,
        liveReload: false,
        hot: false,
        webSocketServer: false
      },

      plugins: [
        new MiniCssExtractPlugin({
          chunkFilename: '[id].[hash].css',
          filename: '[name].[hash].css'
        })
      ]
    },
    // All shared webpack configuration for storybook webpack and app webpack configs
    configureSharedWebpack(isDevelopment)
  );
};
