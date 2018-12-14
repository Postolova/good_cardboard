const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devServer: {
		clientLogLevel: 'warning',
		open: true,
		overlay: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader'
		},
		{
			test: /\.(sass|scss)$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}
		]
	}
});
