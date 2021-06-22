import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<React.ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const FirstButton = Template.bind({});
FirstButton.args = {
  children: 'First Button',
  onClick: () => {
    alert("Clicked")
  },
  backgroundColor: 'green',
  color: 'white',
};

export const SecondButton = Template.bind({});
SecondButton.args = {
  children: 'Second Button',
  onClick: () => {
    alert("Clicked")
  },
  backgroundColor: 'blue',
  color: 'white'
};