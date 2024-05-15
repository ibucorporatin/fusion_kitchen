import { Alert } from 'react-native';

const FirebaseErrorHander = (error, errorType) => {
  const errorMessages = {
    whileSubmitPhone: {
      'auth/too-many-requests':
        'We have blocked all requests from this device due to unusual activity. Try again later.',
      'auth/invalid-phone-number':
        'Invalid phone number. Please provide a valid phone number.',
      'auth/network-request-failed':
        'Network request failed. Please check your internet connection and try again.',
      'auth/invalid-credential':
        'Invalid credentials. Please check your authentication credentials.',
      'auth/unavailable':
        'Authentication service is temporarily unavailable. Please try again later.',
    },
    whileSubmitOtp: {
      'auth/invalid-verification-code':
        'Invalid OTP: Please enter a valid OTP.',
      'auth/code-expired':
        'OTP Expired: The OTP has expired. Please request a new OTP.',
      'auth/quota-exceeded':
        'Quota Exceeded: The verification quota for this phone number has been exceeded. Please try again later.',
      'auth/user-disabled':
        'User Disabled: The user corresponding to the given phone number has been disabled.',
      'auth/user-not-found':
        'User Not Found: There is no existing user record corresponding to the provided phone number.',
      'auth/network-request-failed':
        'Network Error: A network error occurred. Please check your internet connection and try again.',
    },
  };

  const errorInfo = errorMessages[errorType];

  for (const errorMessage in errorInfo) {
    if (error.message.includes(errorMessage)) {
      Alert.alert('Error', errorInfo[errorMessage]);
      return; // Exit the function after showing the alert
    }
  }

  Alert.alert('Error', error.message || 'Something went wrong. Please try again.');
};

export default FirebaseErrorHander;

// Usage:
// Example 1 - while submitting phone number:
// try {
//   // ...
// } catch (error) {
//   FirebaseErrorHander(error, 'whileSubmitPhone');
// }

// Example 2 - while submitting OTP:
// try {
//   // ...
// } catch (error) {
//   FirebaseErrorHander(error, 'whileSubmitO
