import Dotenv from 'dotenv-webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions) => {
	const {
		paths,
		isDev,
		needBundleAnalyzer,
	} = options;

	const plugins = [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new Dotenv(),
	];

	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
	}

	if (needBundleAnalyzer) {
		plugins.push(new BundleAnalyzerPlugin());
	}

	return plugins;
};
