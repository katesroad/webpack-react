const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	cache: {
		cacheDirectory: path.resolve(__dirname, '.temp_cache'),
		type: 'filesystem',
	},
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	resolve: {
		alias: {
			assets: path.resolve(__dirname, '../src/assets'),
			components: path.resolve(__dirname, '../src/components'),
			css: path.resolve(__dirname, '../src/css'),
			services: path.resolve(__dirname, '../src/services'),
			types: path.resolve(__dirname, '../src/@types'),
		},
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.(ts|js)x?$/,
				use: [
					{
						loader: 'babel-loader',
            options: {
              // the preset for react jsx grammar
							presets: ['@babel/preset-react'],
						},
					},
				],
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
		],
	},
	output: {
		clean: true,
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, '..', 'build'),
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', './src/index.html'),
		}),
	],
};
