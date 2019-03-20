const path = require("path");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
		"example": "./example/index.tsx"
	},
	output: {
		path: path.resolve(__dirname, "../wwwroot/js/dist/"),
		publicPath: "/js/dist/",
		filename: "[name].bundle.js"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	devtool: "source-map",
	devServer: {
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
						babelrc: false,
						presets: [
							[
								"@babel/preset-env",
								{
									targets: { browsers: "last 2 versions" },
									useBuiltIns: "usage"
								}
							],
							"@babel/preset-typescript",
							"@babel/preset-react"
						],
						plugins: [
							"react-hot-loader/babel"
						]
					}
				}
			}
		]
	},
	externals: {
		jquery: "jQuery",
		react: "React",
		"react-dom": "ReactDOM"
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
	]
};