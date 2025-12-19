import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { ToggleButton } from './ToggleButton';

const meta = {
  title: 'Example/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle',
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: 'Enabled',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    label: 'Disabled (On)',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small toggle',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large toggle',
  },
};

export const WithoutLabel: Story = {
  args: {},
};
