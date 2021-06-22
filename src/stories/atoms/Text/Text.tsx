import React from 'react';
import { Text as ChakraText, TextProps as ChakraTextProps } from '@chakra-ui/react';

// We're extending this one (ChakraTextProps) incase we want to edit the styling of ChakraText
interface TextProps extends ChakraTextProps {}

const Text: React.FC<TextProps> = (props) => {
  // Rest for styling purposes
  const { children, ...rest } = props;
  return <ChakraText {...rest}>{children}</ChakraText>
};

export default Text;
