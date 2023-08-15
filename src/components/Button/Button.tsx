import React, {useMemo} from 'react';
import {FunctionComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonSizes} from '../../types/styles';
import styles from './styles';

type ButtonProps = {
  label: string;
  onPress: () => void;
  size: ButtonSizes;
};

const Button: FunctionComponent<ButtonProps> = ({label, onPress, size}) => {
  const buttonSize: number = useMemo(() => {
    switch (size) {
      case ButtonSizes.SMALL:
        return 150;
      case ButtonSizes.MEDIUM:
        return 250;
      case ButtonSizes.LARGE:
        return 350;
      default:
        return 150;
    }
  }, [size]);
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {width: buttonSize}]}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
