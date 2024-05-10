import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {globalfonts} from '../styles/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({
  label,
  error,
  showPasswordToggle = false,
  ...res
}) => {
  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#807878"
          style={styles.input}
          secureTextEntry={showPasswordToggle ? !showPassword : false}
          {...res}
        />

        {showPasswordToggle ? (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconContainer}
            onPress={toggleShowPassword}>
            <MaterialCommunityIcons
              name={showPassword ? 'eye' : 'eye-off'}
              size={22}
              color="#807878"
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : null}

   
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    color: '#172B4D',
    ...globalfonts.regular,
  },
  inputContainer: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#172B4D',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  input: {
    fontSize: 13,
    ...globalfonts.regular,
    color: '#172B4D',
    flex: 10,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'flex-end',
  },
  error: {
    fontSize: 10,
    color: '#C61F1F',
    ...globalfonts.medium,
  },

});

export default CustomInput;
