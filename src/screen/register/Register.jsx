import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from '../../globalComponents/CustomInput';
import RootLayout from '../../globalComponents/RootLayout';
import CustomHeader from '../../globalComponents/CustomHeader';
import {images} from '../../utils/constant';
import CustomBanner from '../../globalComponents/CustomBanner';
import CustomButton from '../../globalComponents/CustomButton';
import {useFormik} from 'formik';
import {REGISTER_SCHEMA} from './RegisterSchema';
const initialValues = {
  name: '',
  userName: '',
  email: '',
  age: '',
  gender: '',
  password: '',
  confirmPassword: '',
};
const Register = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: REGISTER_SCHEMA,
    onSubmit: async values => {
      // Handle form submission here
      console.log(values);
    },
  });
  return (
    <RootLayout>
      <ScrollView>
        <CustomHeader name="SIGN UP" />
        <CustomBanner list={images} />
        <View style={styles.inputContainer}>
          {/* Full Name Input */}
          <CustomInput
            label="Full name"
            placeholder="Enter your full name"
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            error={formik.touched.name && formik.errors.name}
          />

          {/* Username Input */}
          <CustomInput
            label="Username"
            placeholder="Create a username"
            value={formik.values.userName}
            onChangeText={formik.handleChange('userName')}
            onBlur={formik.handleBlur('userName')}
            error={formik.touched.userName && formik.errors.userName}
          />

          {/* Email Input */}
          <CustomInput
            label="Email id"
            placeholder="Enter your email address"
            keyboardType="email-address"
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            error={formik.touched.email && formik.errors.email}
          />

          {/* Age Input */}
          <CustomInput
            label="Age"
            placeholder="Enter your age"
            keyboardType="numeric"
            value={formik.values.age}
            onChangeText={formik.handleChange('age')}
            onBlur={formik.handleBlur('age')}
            error={formik.touched.age && formik.errors.age}
          />

          {/* Password Input */}
          <CustomInput
            label="Password"
            placeholder="Create your password"
            showPasswordToggle
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            error={formik.touched.password && formik.errors.password}
          />

          {/* Confirm Password Input */}
          <CustomInput
            label="Confirm password"
            placeholder="Enter your confirm password"
            showPasswordToggle
            value={formik.values.confirmPassword}
            onChangeText={formik.handleChange('confirmPassword')}
            onBlur={formik.handleBlur('confirmPassword')}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <CustomButton title="Register" onPress={formik.handleSubmit} />
        </View>
      </ScrollView>
    </RootLayout>
  );
};

export default Register;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: '10%',
  },
});
