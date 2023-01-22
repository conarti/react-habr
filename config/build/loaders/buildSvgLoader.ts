export const buildSvgLoader = () => ({
	test: /\.svg$/,
	use: [
		{
			loader: '@svgr/webpack',
			options: {
				svgoConfig: {
					plugins: [
						'preset-default',
						{
							name: 'convertColors',
							params: {
								currentColor: true,
							},
						},
						{
							name: 'addClassesToSVGElement',
							params: {
								className: 'app-icon',
							},
						},
						'removeDimensions',
					],
				},
			},
		},
	],
});
