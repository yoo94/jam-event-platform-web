// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import AskTab from '@/widgets/customer/AskTab';

const meta: Meta<typeof AskTab> = {
  title: 'customer/AskTab',
  component: AskTab,
};

export default meta;
type Story = StoryObj<typeof AskTab>;

export const Default: Story = {
  render: args => <AskTab {...args} />,
};
