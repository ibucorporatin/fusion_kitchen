import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RootLayout from '../../globalComponents/RootLayout';
import CustomHeader from '../../globalComponents/CustomHeader';
import {globalfonts} from '../../styles/fonts';
import CustomButton from '../../globalComponents/CustomButton';
import {useState} from 'react';
import {useEffect} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useNavigation } from '@react-navigation/native';
globalfonts;
const OtpVerification = () => {
  // const dispatch = useDispatch();

  // // get values from params
  // const route = useRoute();
  // const routeValues = route.params;

  // // for navigation
  const navigation = useNavigation();

  // // to store firebase confirmation
  // const [Confirmation, setConfirmation] = useState();
  // // used to set confirmUser params to confirmationstate
  // useEffect(() => {
  //   setConfirmation(routeValues.confirmUser);
  // }, []);

  // loading sate for button
  const [loading, setLoading] = useState(false);

  // state for otp code
  const [code, setCode] = useState('');

  // state for otp error
  const [authError, setAuthError] = useState();

  const {screenWidth} = useScreenDimensions();

  // back function to go back
  const backFunction = () => {
    navigation.goBack();
  };

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
      // const confirmation = await auth().signInWithPhoneNumber(
      //   routeValues.formattedValue,
      //   true,
      // );
      startCountdown();
      // setConfirmation(confirmation);
      // refetchResend();
    } catch (error) {
      // Handle errors while submit phone number
    }
  };
  // Resend OTP functionalities end

  // const verifyToken = async () => {
  //   try {
  //     const sendToken = await API.post('/verifyToken', null, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     });
  //     if (sendToken.status === 200) {
  //       // check is new user or not if it new user move to register else move to dashboard
  //       if (sendToken.data.isNewUser) {
  //         navigation.navigate('registration', {
  //           mobile: routeValues?.formattedValue,
  //           countryCode: routeValues?.countryCode,
  //         });
  //       } else {
  //         dispatch(setIsLoggedIn(true));
  //       }
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log('otp error', error);
  //     setLoading(false);
  //     AxiosErrorHandler(error);
  //   }
  // };

  //otp submit buttonPress
  // const handlePress = async () => {
  //   if (validateOTP(code)) {
  //     try {
  //       setLoading(true);
  //         await Confirmation?.confirm(code);
  //       verifyToken();
  //     } catch (error) {
  //       setLoading(false);
  //       // Handle specific phone number OTP verification errors
  //       FirebaseErrorHander(error, 'whileSubmitOtp');
  //       setCode('');
  //     }
  //   }
  // };

  return (
    <RootLayout>
      <CustomHeader />
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.text}>Please Enter Your Verification Code.</Text>

        <TouchableOpacity onPress={resendCode} disabled={isCountdownRunning}>
          <OTPInputView
            style={{
              width: screenWidth / 1.15,
              height: 50,
              marginTop: screenWidth / 4,
            }}
            pinCount={6}
            code={code}
            onCodeChanged={code => {
              validateOTP(code);
            }}
            autoFocusOnLoad={false}
            editable={true}
            keyboardType="number-pad"
            codeInputFieldStyle={styles.codeInputFieldStyle}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={i => {
              setCode(i);
            }}
          />

          <Text style={styles.resendText}>
            Resend Code
            {isCountdownRunning
              ? ` 00: ${countdown < 10 ? '0' + countdown : countdown}`
              : null}
          </Text>
        </TouchableOpacity>

        {/* {authError && (
          <Text className="text-red-500 px-5 pl-7 text-sm">{authError}</Text>
        )} */}

        {/* submit button */}
        <CustomButton
          // isLoading={loading}
          title="Done"
          // onPress={handlePress}
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
    marginTop: 10,
    marginBottom: 3,
    fontWeight: '600',
    color: 'black',
    fontSize: 20,
    ...globalfonts.medium,
  },
  resendText: {
    paddingHorizontal: 20,
    textAlign: 'right',
    paddingRight: 6,
    marginTop: 2,
    fontSize: 12,
    color: 'gray',
  },
  underlineStyleHighLighted: {
    borderColor: "yellow",
  },
  codeInputFieldStyle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    backgroundColor: "#fff",
    ...globalfonts.semi_bold,
    color: "pink",
  },
});
