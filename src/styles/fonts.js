// globalfonts used across the project for changing text styles
import {StyleSheet, Platform} from 'react-native';

export const globalfonts = StyleSheet.create({
  bold_font: {
    fontFamily: Platform.select({
      android: 'Poppins-Bold',
      // No iOS specific font family here
    }),
  },
  semi_bold: {
    fontFamily: Platform.select({
      android: 'Poppins-SemiBold',
      // No iOS specific font family here
    }),
  },
  medium: {
    fontFamily: Platform.select({
      android: 'Poppins-Medium',
      // No iOS specific font family here
    }),
  },
  regular: {
    fontFamily: Platform.select({
      android: 'Poppins-Regular',
      // No iOS specific font family here
    }),
  },
  light: {
    fontFamily: Platform.select({
      android: 'Poppins-Light',
      // No iOS specific font family here
    }),
  },
  extra_light: {
    fontFamily: Platform.select({
      android: 'Poppins-ExtraLight',
      // No iOS specific font family here
    }),
  },
  extra_bold: {
    fontFamily: Platform.select({
      android: 'Poppins-ExtraBold',
      // No iOS specific font family here
    }),
  },
  thin: {
    fontFamily: Platform.select({
      android: 'Poppins-Thin',
      // No iOS specific font family here
    }),
  },
});
