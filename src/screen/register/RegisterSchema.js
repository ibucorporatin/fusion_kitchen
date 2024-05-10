import * as yup from 'yup';

export const REGISTER_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required('The full name is required.')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Invalid name!'),
  userName: yup
    .string()
    .required('The username is required.')
    .min(6,"user name must be at least 6 characters")
    .matches(/^[a-zA-Z0-9\s]+$/, 'Invalid name!'),
  email: yup
    .string()
    .required('The email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email address!',
    ),
  age: yup
    .number()
    .required('Age is required.')
    .min(10, 'Age must be at least 10 years old.')
    .max(200, 'Age must not exceed 200 years old.'),
  // gender: yup
  //   .string()
  //   .required('Gender is required')
  //   .oneOf(['male', 'female', 'transgender'], 'Invalid gender'),
  password: yup
    .string()
    .required('Password is required.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one symbol, one number, and be 8-16 characters long.',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
    .required('Please confirm your password.'),
});
