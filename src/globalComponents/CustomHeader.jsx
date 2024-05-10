import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalfonts} from '../styles/fonts';

const CustomHeader = ({name}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="chevron-back-outline" size={25} color="black" />
      </TouchableOpacity>

      {name && <Text style={styles.title}>{name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#00000025',
  },

  backButton: {
    position: 'absolute',
    left: '5%',
  },
  title: {
    fontSize: 18,
    ...globalfonts.semi_bold,
    color: '#172B4D',
  },
});

export default CustomHeader;
