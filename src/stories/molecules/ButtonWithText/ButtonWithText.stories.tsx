import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonWithText } from '.';
import { Flex } from '@chakra-ui/react';

export default {
  title: 'Molecules/ButtonWithText',
  component: ButtonWithText,
  argTypes: {},
} as Meta;

const Template: Story<React.ComponentProps<typeof ButtonWithText>> = (args) => {
  return (
    <Flex flexDirection="row">
      <ButtonWithText {...args} />
    </Flex>
  )
};

export const First = Template.bind({});
First.args = {
  buttonValue: 'Some Button',
  textValue: 'Some Text',
};

export const Second = Template.bind({});
Second.args = {
  buttonValue: 'Another Button',
  backgroundColor: 'cyan',
  color: 'red',
  textValue: 'Another Text',
};