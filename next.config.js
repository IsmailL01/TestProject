/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.s[ac]ss$/i,
			use: [
				{
					loader: 'style-loader',
				},
				'css-modules-typescript-loader',
				{
					loader: 'css-loader',

					options: {
						modules: true,
					},
				},

				{
					loader: 'sass-loader',
				},
			],
		});
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname),
			'@/public/svg': path.resolve(__dirname, 'public/svg'),
		};
		return config;
	},
};
