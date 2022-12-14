import React from 'react';
import { Story } from '@storybook/react';
import { TechnologiesShowcase } from './TechnologiesShowcase';

const Template: Story = (args) => <TechnologiesShowcase {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'components/TechnologiesShowcase',
  component: TechnologiesShowcase,
};
