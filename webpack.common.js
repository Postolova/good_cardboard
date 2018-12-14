const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.[chunkhash].js'
	},
	module: {
		rules: [{
			test: /\.(woff|woff2)$/,
			loader: 'file-loader',
			options: {
				name: 'fonts/[name].[ext]'
			}
		},
		{
			test: /\.(gif|jpe?g|png|svg|webp)$/,
			loader: 'file-loader',
			options: {
				name: 'images/[hash].[ext]'
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				conservativeCollapse: true
			}
		}),
		new SvgSpriteHtmlWebpackPlugin({
			includeFiles: [
				'src/assets/images/svg-for-sprite/*.svg'
			]
		}),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, 'static/'),
			to: path.resolve(__dirname, 'dist/')
		}])
	]
};
