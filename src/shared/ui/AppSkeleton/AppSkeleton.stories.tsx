import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppSkeleton } from './AppSkeleton';

export default {
	title: 'shared/AppSkeleton',
	component: AppSkeleton,
	args: {},
} as ComponentMeta<typeof AppSkeleton>;

const Template: ComponentStory<typeof AppSkeleton> = (args) => (
	<div style={{
		display: 'flex',
		gap: 20,
		padding: 40,
		height: '100vh',
		width: '100vw',
	}}
	>
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 10,
			flexWrap: 'wrap',
			padding: 10,
			backgroundColor: 'var(--bg-light-color)',
			borderRadius: 'var(--border-radius-base)',
			flexGrow: 1,
		}}
		>
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
		</div>

		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 10,
			flexWrap: 'wrap',
			padding: 10,
			backgroundColor: 'var(--bg-color)',
			borderRadius: 'var(--border-radius-base)',
			flexGrow: 1,
		}}
		>
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
			<AppSkeleton {...args} />
		</div>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	width: 100,
};

export const Circle = Template.bind({});
Circle.args = {
	width: 100,
	height: 100,
	borderRadius: 'circle',
};
