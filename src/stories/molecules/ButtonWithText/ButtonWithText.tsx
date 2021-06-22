import React from 'react';
import { Text, Button } from '../../atoms';

type BgAndColorType = 'cyan' | 'blue' | 'red';

interface ButtonWithText {
  backgroundColor: BgAndColorType;
  textValue: string;
  buttonValue: string;
  color: BgAndColorType
}

const ButtonWithText: React.FC<ButtonWithText> = (props) => {
  const { textValue, buttonValue, backgroundColor, color } = props;
  return (
    <>
      <Text color={color} backgroundColor={backgroundColor}>{textValue}</Text>
      <Button color={color} backgroundColor={backgroundColor}>{buttonValue}</Button>
      {/* Uncomment this one, there will be error since _hover is not available for the Button Atom */}
      {/* <Button _hover={{color: 'white'}} color={color} backgroundColor={backgroundColor}>{buttonValue}</Button> */}
    </>
  )
};

export default ButtonWithText;