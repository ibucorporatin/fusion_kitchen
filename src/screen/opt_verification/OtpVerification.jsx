import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import RootLayout from '../../globalComponents/RootLayout';
import CustomHeader from '../../globalComponents/CustomHeader';
import {globalfonts} from '../../styles/fonts';
import CustomButton from '../../globalComponents/CustomButton';
import {useState} from 'react';
import {useEffect} from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import auth from '@react-native-firebase/auth';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '../../store/slices';
import FirebaseErrorHander from '../../utils/FirebaseErrorHander';
globalfonts;
const OtpVerification = () => {
  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  // const setText = () => {
  //     otpInput.current.setValue("1234");
  // }

  const dispatch = useDispatch();

  // get values from params
  const route = useRoute();
  const routeValues = route.params;

  // // for navigation
  const navigation = useNavigation();

  // to store firebase confirmation
  const [Confirmation, setConfirmation] = useState();
  // used to set confirmUser params to confirmationstate
  useEffect(() => {
    setConfirmation(routeValues.confirmUser);
  }, []);

  // loading sate for button
  const [loading, setLoading] = useState(false);

  // state for otp code
  const [code, setCode] = useState('');

  // state for otp error
  const [authError, setAuthError] = useState();

  // function for validate otp . it return boolean. if it valid return true else false
  const validateOTP = code => {
    setCode(code);
    if (code === '' || code.length < 6) {
      setAuthError('Please fill in the OTP.');
      return false;
    } else if (code.match(/\D/g)) {
      setAuthError('Verification code must be digits.');
      return false;
    } else {
      setAuthError('');
      return true;
    }
  };

  // Resend OTP related state & functionalities

  // countdown state
  const [countdown, setCountdown] = useState(0);
  const [isCountdownRunning, setIsCountdownRunning] = useState(true);

  // to start countdown
  const startCountdown = () => {
    setIsCountdownRunning(true);
  };

  // to stop countdown
  const stopCountdown = () => {
    setIsCountdownRunning(false);
  };

  // this is for otp countdown
  useEffect(() => {
    let countdownInterval;
    if (isCountdownRunning) {
      setCountdown(59); // Set countdown duration to 59 seconds
      countdownInterval = setInterval(() => {
        setCountdown(prevCountdown => {
          const newCountdown = prevCountdown - 1;
          if (newCountdown === 0) {
            stopCountdown();
          }
          return newCountdown;
        });
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isCountdownRunning]);

  // this is resend
  const resendCode = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        routeValues.formattedValue,
        true,
      );
      startCountdown();
      clearText();
      setCode('');
      setConfirmation(confirmation);
    } catch (error) {
      FirebaseErrorHander(error, 'whileSubmitPhone');
      // Handle errors while submit phone number
      
    }
  };
  // Resend OTP functionalities end

  //otp submit buttonPress
  const handlePress = async () => {
    if (validateOTP(code)) {
      try {
        setLoading(true);
        let res = await Confirmation?.confirm(code);
        console.log(res?.additionalUserInfo.isNewUser, 'ress');
        if (res?.additionalUserInfo.isNewUser) {
          navigation.navigate('register');
        } else {
          dispatch(setIsLoggedIn(true));
        }
        setLoading(false);
      } catch (error) {
        firebaseHandleError(error, 'whileSubmitOtp');
        setLoading(false);
        clearText();
        setCode('');
      }
    }
  };

  return (
    <RootLayout>
      <CustomHeader />
      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.text}>Please Enter Your Verification Code.</Text>

        <OTPTextInput
          containerStyle={{marginBottom: 20}}
          textInputStyle={{fontSize: 17}}
          tintColor="#9AE16C"
          autoFocus={true}
          handleTextChange={code => {
            validateOTP(code);
          }}
          inputCount={6}
          ref={e => (otpInput = e)}
        />

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '10%',
          }}>
          <TouchableOpacity onPress={resendCode} disabled={isCountdownRunning}>
            <Text style={styles.resendText}>
              Resend Code
              {isCountdownRunning
                ? ` 00: ${countdown < 10 ? '0' + countdown : countdown}`
                : null}
            </Text>
          </TouchableOpacity>
          {authError ? <Text style={styles.error}>{authError}</Text> : null}
        </View>
        {/* submit button */}
        <CustomButton
          isLoading={loading}
          title="Done"
          onPress={handlePress}
          backgroundColor="#427594"
          textSize={17}
        />
      </View>
    </RootLayout>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  text: {
    marginBottom: '20%',
    fontWeight: '600',
    color: 'black',
    fontSize: 20,
    ...globalfonts.medium,
  },
  resendText: {
    // paddingHorizontal: 20,
    // paddingRight: 6,
    // marginTop: 2,
    fontSize: 12,
    color: 'gray',
  },

  error: {
    fontSize: 10,
    marginTop: 5,
    color: '#C61F1F',
    ...globalfonts.medium,
  },
});
