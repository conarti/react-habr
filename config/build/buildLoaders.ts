import { RuleSetRule } from 'webpack';
import { buildSassLoader } from './loaders/buildSassLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
	const svgLoader = buildSvgLoader();

	const babelLoader = {
		test: /\.(js|ts)x?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const sassLoader = buildSassLoader(isDev);

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		sassLoader,
	];
};
