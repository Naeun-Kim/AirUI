import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
    title: 'Card',
    component: Card,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        flags: {
            control: 'array',
        }
    }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

// export const Default: Story = {
//     render: () => <Card />,
// }

export const Default: Story = {
    args: {
        bordered: true,
    }
}