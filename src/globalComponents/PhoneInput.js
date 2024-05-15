import React from 'react';
import {StyleSheet, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/Feather';
import {globalfonts} from '../styles/fonts';

const PhoneInputView = props => {
  const phoneInput = React.useRef(null);
  const {containerStyle} = props;
  return (
    <>
      <View style={{position: 'relative'}}>
        <PhoneInput
          placeholder={props.placeholder}
          code={props.code}
          ref={phoneInput}
          defaultValue={props.defaultValue} // default value
          defaultCode={props.defaultCode} // default country Code
          value={props.value}
          // layout="first" // first & second
          withShadow={props.withShadow}
          autoFocus={props.autoFocus}
          onChangeText={props.onChangeText}
          onChangeCountry={props?.onChangeCountry}
          onChangeFormattedText={props.onChangeFormattedText} // with +91 (Ex: +91 9010290102)
          countryPickerProps={{
            disableNativeModal: false, // explicitly specify this
          }}
          textContainerStyle={styles.textContainerStyle}
          containerStyle={{...containerStyle, ...styles.containerStyle}} // dropdown & input container
          codeTextStyle={styles.codeTextStyle}
          countryPickerButtonStyle={styles.countryPickerButtonStyle} // Country picker button
          textInputProps={{
            placeholderTextColor: '#7A7A7A',
            ...props.textValue,
          }}
          onBlur={props.handleBlur}
          onFocus={props.handleBlur}
          filterProps={props.filterProps}
          textInputStyle={styles.textInputStyle} // Text Input Style
          disabled={props.disable}
        />
        {/* Right Phone Icon */}
        {props.rightIcone ? (
          <View style={{zIndex: 1, top: 17, position: 'absolute', right: 5}}>
            <Icon name="phone" type="feather" color="#0B78BC" size={15} />
          </View>
        ) : null}
      </View>
  
    </>
  );
};

export default PhoneInputView;

const styles = StyleSheet.create({
  textContainerStyle: {
    backgroundColor: '#fff',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  containerStyle: {
    width: '100%',
    height: 50,
    // elevation: 2,
    borderRadius: 5,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#001C00',
    paddingRight: '10%',
  },
  codeTextStyle: {
    paddingLeft: 0,
    fontSize: 15,
    marginTop: 5,
    marginLeft: -13,
    ...globalfonts.medium,
    color: '#000',
  },
  countryPickerButtonStyle: {
    backgroundColor: '#fff',
    margin: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    transform: [{scale: 0.8}],
    marginLeft: '-2%',
  },
  textInputStyle: {
    paddingLeft: 10,
    fontSize: 15,
    ...globalfonts.medium,
    color: '#000',
    marginBottom: -5,
  },
});
