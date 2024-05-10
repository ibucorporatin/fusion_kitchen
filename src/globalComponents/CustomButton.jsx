import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {globalfonts} from '../styles/fonts';

const CustomButton = ({
  title = 'submit',
  style,
  textStyle,
  onPress,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      style={[styles.container, style]}
      activeOpacity={0.5}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[styles.textStyle, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9AE16C',
    borderRadius: 5,
    marginVertical: 20,
    height: 50,
  },
  textStyle: {
    color: '#001C00',
    fontSize: 15,
    ...globalfonts.medium,
  },
});
