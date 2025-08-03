import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleSelect } from './StyleSelect';

const meta: Meta<typeof StyleSelect> = {
	component: StyleSelect,
};

export default meta;
type Story = StoryObj<typeof StyleSelect>;

const SelectWithState = () => {
	const options = [
		{ title: '1 опция', value: '1 опция', className: '' },
		{ title: '2 опция', value: '2 опция', className: '' },
		{ title: '3 опция', value: '3 опция', className: '' },
		{ title: '4 опция', value: '4 опция', className: '' },
	];

	const [selected, setSelected] = useState(options[0]);

	return (
		<StyleSelect
			title="Выберите опцию"
			selected={selected}
			options={options}
			onChange={setSelected}
		/>
	);
};

export const SelectStory: Story = {
	render: () => <SelectWithState />,
};
