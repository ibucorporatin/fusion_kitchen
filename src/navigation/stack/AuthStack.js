import React from 'react';
import Register from '../../screen/register/Register';
import Login from '../../screen/login/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtpVerification from '../../screen/opt_verification/OtpVerification';
import CreateNewPassword from '../../screen/create_new_password/CreateNewPassword';
import ForgotPassword from '../../screen/forgot_password/ForgotPassword';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="forgot_password" component={ForgotPassword} />
      <Stack.Screen name="otp" component={OtpVerification} />
      <Stack.Screen name="create_password" component={CreateNewPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
