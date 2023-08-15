import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    backgroundColor: colors.mediumBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  label: {
    color: colors.white,
    fontWeight: '500',
  },
});

export default styles;
