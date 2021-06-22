import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {},
} as Meta;

const Template: Story<React.ComponentProps<typeof Text>> = (args) => <Text {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'Sample Text',
};
