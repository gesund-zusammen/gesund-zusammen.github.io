const webpack = require("webpack");
const path = require("path");
const Dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { NODE_ENV, OPTIMIZED_BUILD } = process.env;
const webpackDotEnvPath = `./config/.env.${NODE_ENV}`;
const webpackEnvVars = Dotenv.config({ path: webpackDotEnvPath }).parsed;
const localEnvironment = NODE_ENV === "local";
const isOptimized = OPTIMIZED_BUILD === "true" || NODE_ENV === "production";
const webpackWatch = localEnvironment && !isOptimized;
const webpackMode = isOptimized ? "production" : "development";
const webpackDevtool = isOptimized
  ? "hidden-source-map"
  : "cheap-eval-source-map";

const config = {
  mode: webpackMode,
  watch: webpackWatch,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
  },
  target: "web",
  devtool: webpackDevtool,
  resolve: {
    extensions: [".md", ".js", ".jsx", ".tsx", ".ts", "woff", "woff2", "ttf"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.md$/i,
        use: [
          {
            loader: "raw-loader",
          },
          {
            loader: "string-replace-loader",
            options: {
              search: "(---(.|\n)*---)",
              replace: "",
              flags: "g",
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              // load only the files that are actually bundled by webpack
              onlyCompileBundledFiles: true,
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        exclude: [
          path.resolve(__dirname, "./src/images/partners/"),
          path.resolve(__dirname, "./src/images/mentors/"),
        ],
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, "./src/images/partners/")],
        use: isOptimized
          ? [
              {
                loader: "file-loader",
                options: {
                  outputPath: "images/partners",
                },
              },
              {
                loader: "image-webpack-loader",
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65,
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                },
              },
            ]
          : [
              {
                loader: "file-loader",
                options: {
                  outputPath: "images/partners",
                },
              },
            ],
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, "./src/images/mentors/")],
        use: isOptimized
          ? [
              {
                loader: "file-loader",
                options: {
                  outputPath: "images/mentors",
                },
              },
              {
                loader: "image-webpack-loader",
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65,
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                },
              },
            ]
          : [
              {
                loader: "file-loader",
                options: {
                  outputPath: "images/mentors",
                },
              },
            ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: [path.resolve(__dirname, "./src/images/partners/")],
        use: isOptimized
          ? [
              {
                loader: "file-loader",
                options: {
                  outputPath: "images/partners",
                },
              },
              {
                loader: "image-webpack-loader",
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65,
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                },
              },
              {
                loader: "image-maxsize-webpack-loader",
                options: {
                  "max-width": 400,
                  "max-height": 400,
                  useImageMagick: true,
                },
              },
            ]
          : [
              {
                loader: "file-loader",
                options: {
                  outputPath: "images/partners",
                },
              },
            ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: [path.resolve(__dirname, "./src/images/mentors/")],
        use: isOptimized
          ? [
              {
                loader: "file-loader",
                options: {
                  outputPath: "images/mentors",
                },
              },
              {
                loader: "image-webpack-loader",
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65,
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                },
              },
              {
                loader: "image-maxsize-webpack-loader",
                options: {
                  "max-width": 400,
                  "max-height": 400,
                  useImageMagick: true,
                },
              },
            ]
          : [
              {
                loader: "file-loader",
                options: {
                  outputPath: "images/mentors",
                },
              },
            ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "fonts",
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            loader: "eslint-loader",
            options: {
              emitWarning: true,
              emitError: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin(["public"], { copyUnmodified: localEnvironment }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      // We need NODE_ENV in the env object and as a separate expression
      // Otherwise, webpack will not build properly.
      "process.env": JSON.stringify({ NODE_ENV, ...webpackEnvVars }),
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    // Don't let webpack override our NODE_ENV
    nodeEnv: false,
  },
  devServer: {
    compress: true,
    contentBase: ["./src/public"],
    historyApiFallback: true,
    stats: {
      assets: false,
      cached: false,
      cachedAssets: false,
      children: false,
      chunkModules: false,
      chunkOrigins: false,
      performance: false,
      reason: false,
      source: false,
    },
    watchContentBase: true,
  },
};

if (localEnvironment) {
  config.plugins.push(new ForkTsCheckerWebpackPlugin());
}

if (isOptimized) {
  config.performance = {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
    hints: "warning",
  };
  config.optimization = {
    ...config.optimization,
    runtimeChunk: "single",
    moduleIds: "hashed",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: {
            beautify: false,
            comments: false,
          },
        },
      }),
    ],
  };
}

module.exports = config;
