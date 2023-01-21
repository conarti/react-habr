// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
	{
		type: 'select',
		name: 'layer',
		message: 'Select layer',
		choices: ['features', 'entities', 'widgets'],
	},
	{
		type: 'input',
		name: 'slice',
		message: 'Name of the new slice',
	},
];
