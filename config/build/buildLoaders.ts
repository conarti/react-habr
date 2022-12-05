import { use } from 'i18next';
import { RuleSetRule } from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildSassLoader } from './loaders/buildSassLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
	const { isDev } = options;

	const svgLoader = buildSvgLoader();

	const babelLoader = buildBabelLoader(options);

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		type: 'asset/resource',
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
