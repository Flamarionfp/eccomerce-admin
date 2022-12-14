import { Story } from '@storybook/react';
import { Main } from './Main';

const Template: Story = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Vite React Boilerplate',
};

export default {
  title: 'components/Main',
  component: Main,
};
