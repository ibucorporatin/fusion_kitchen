import React from 'react';
import {useSelector} from 'react-redux';
import {getIsLoggedIn} from '../store/slices';
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';

const AuthenticationManager = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <AppStack /> : <AuthStack />;
};

export default AuthenticationManager;
