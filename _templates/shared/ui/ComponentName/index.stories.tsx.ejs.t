---
to: src/shared/ui/<%= h.changeCase.pascal(componentName) %>/index.stories.tsx
---
<%
 componentNamePascal = h.changeCase.pascal(componentName)
%>
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { <%= componentNamePascal %> } from './index';

export default {
	title: 'shared/<%= componentNamePascal %>',
	component: <%= componentNamePascal %>,
	args: {},
} as ComponentMeta<typeof <%= componentNamePascal %>>;

const Template: ComponentStory<typeof <%= componentNamePascal %>> = (args) => <<%= componentNamePascal %> {...args} />;

export const Default = Template.bind({});
Default.args = {};

