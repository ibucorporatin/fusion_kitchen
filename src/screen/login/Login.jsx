import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import RootLayout from '../../globalComponents/RootLayout';
import CustomButton from '../../globalComponents/CustomButton';
import PhoneInputView from '../../globalComponents/PhoneInput';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { globalfonts } from '../../styles/fonts';
const Login = () => {
  // const dispatch = useDispatch();
  // loading sate for button
  const [loading, setLoading] = useState(false);
  // this state for backpress handler
  const [isAlertOpen, setisAlertOpen] = useState(false);
  const navigation = useNavigation();
  const phoneInput = useRef(null);
  const [formattedValue, setFormattedValue] = useState('');
  // Formik Validations (Intial State, Validation Schema, Submit Handler)
  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      phone: Yup.string()
        .phone('IN', 'Please enter a valid phone number')
        .required('A phone number is required'),
    }),
    onSubmit: async () => {
      console.log(formattedValue);
      navigation.navigate("otp")
      // try {
      //   // set button loading true
      //   setLoading(true);
      //   // trigger the otp with phone number
      //   const confirmation = await auth().signInWithPhoneNumber(
      //     formattedValue,
      //     true,
      //   );
      //   setLoading(false);
      //   // navigate to otp screen
      //   navigation.navigate('otp_verification', {
      //     formattedValue,
      //     confirmUser: confirmation,
      //     countryCode: '+' + (countyDetails.callingCode?.[0] || '91'),
      //   });
      // } catch (error) {
      //   setLoading(false);
      //   // Handle errors while submit phone number
      //   FirebaseErrorHander(error, 'whileSubmitPhone');
      // }
    },
  });
  return (
    <RootLayout>
      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: 300,
            height: 100,
            resizeMode: 'contain',
            marginBottom: 60,
          }}
          source={require('../../../assets/images/logo.png')}
        />
        <PhoneInputView
          title="Phone Number"
          value={formik.values.phone}
          textValue={{
            value: formik.values.phone,
          }}
          defaultValue={formik.values.phone}
          defaultCode="IN"
          autoFocus
          countryPickerProps={{withAlphaFilter: true}}
          phoneInput={phoneInput}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          handleBlur={() => formik.setFieldTouched('phone', true)}
          rightIcone={true}
          onChangeText={text => {
            formik.setFieldValue('phone', text.replace(/\D/g, ''));
          }}
        />
        {formik.errors.phone ? (
          <Text style={styles.error}>{formik.errors.phone}</Text>
        ) : null}
        <CustomButton
          title="Continue"
          isLoading={loading}
          style={{marginTop: 30}}
          onPress={formik.handleSubmit}
        />
      </View>
    </RootLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  error: {
    fontSize: 10,
    marginTop:5,
    color: '#C61F1F',
    ...globalfonts.medium,
  },
});
