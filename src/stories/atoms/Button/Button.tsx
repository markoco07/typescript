import React from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

// Omit = Utility Types for Typescript
// Search Utility Types to know more
interface ButtonProps extends Omit<ChakraButtonProps, '_hover'> {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  /**
   * Hover cannot be changed since you Omit the _hover props
   */
  return <ChakraButton _hover={{color: 'grey'}} {...rest}>{children}</ChakraButton>
};

export default Button;
