import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildSassLoader } from '../build/loaders/buildSassLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};
	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push('.ts', '.tsx');
	// eslint-disable-next-line no-param-reassign
	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});
	config.module.rules.push(buildSassLoader(true), buildSvgLoader());
	return config;
};
