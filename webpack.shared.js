const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// Configurations for sass, which also include global sass file parsing
const configureSass = (isDevelopment = true) => [
  {
    test: /\.module\.s(a|c)ss$/,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: isDevelopment
        }
      },
      {
        loader: 'resolve-url-loader',
        options: {}
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDevelopment
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, './src/sass/resources.scss')
        }
      }
    ]
  },
  {
    test: /\.s(a|c)ss$/,
    exclude: /\.module.(s(a|c)ss)$/,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDevelopment
        }
      }
    ]
  }
];

// Configuration for assets
const configureAssets = () => {
  return [
    {
      test: /\.react.svg$/,
      use: [
        '@svgr/webpack',
        {
          loader: 'file-loader',
          options: {
            publicPath: '/'
          }
        }
      ]
    }
  ];
};

const configureWatchOptions = () => ({
  // aggregateTimeout: 500, // Delay before reloading
  // poll: 1000, // Enable polling since fsevents are not supported in docker
  // ignored: /node_modules/
});

// Aliases used for simplification imports
const configureAliases = () => ({
  '@': path.resolve(__dirname, './src')
});

const configureNodeModulesSvgs = () => [
  new CopyPlugin({
    patterns: [
      {
        from: './node_modules/**/*.svg',
        to({ context, absoluteFilename }) {
          return `${path.relative(context, absoluteFilename.split('\\').reverse()[0])}`;
        },
        toType: 'file'
      }
    ]
  })
];

const configureSharedWebpack = (isDevelopment) => ({
  module: {
    rules: [...configureAssets(), ...configureSass(isDevelopment)]
  },
  // watchOptions: configureWatchOptions(),
  resolve: {
    alias: configureAliases()
  }
});

module.exports = {
  configureSharedWebpack,
  configureAliases,
  configureWatchOptions,
  configureSass,
  configureAssets,
  configureNodeModulesSvgs
};
