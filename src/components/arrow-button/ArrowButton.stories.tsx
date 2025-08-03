import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	title: 'Components/ArrowButton',
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const Default: Story = {
	render: () => (
		<ArrowButton isOpen={false} onClick={() => alert('Клик по кнопке')} />
	),
};
