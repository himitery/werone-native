import React from 'react';
import {
  HeaderBackButton,
  HeaderBackButtonProps,
} from '@react-navigation/elements';
import { Colors } from '@constants/color';

interface CustomHeaderBackButtonProps {
  props: HeaderBackButtonProps;
}

const CustomHeaderBackButton: React.FC<CustomHeaderBackButtonProps> = ({
  props,
}) => {
  return <HeaderBackButton {...props} tintColor={Colors.BLACK} />;
};

export default CustomHeaderBackButton;
