const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	devServer: {
		historyApiFallback: true,
		hot: true,
		open: true,
	},
	devtool: 'cheap-module-source-map',
	mode: 'development',
	plugins: [
		new ReactRefreshWebpackPlugin(),
	],
};
