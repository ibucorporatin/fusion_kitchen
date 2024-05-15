import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootLayout from '../../globalComponents/RootLayout';
import {globalfonts} from '../../styles/fonts';

const Delivery = () => {
  return (
    <RootLayout>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 200, height: 200}}
          source={require('../../../assets/images/delivery.png')}
        />
        <Text
          style={{
            color: '#001C00',
            ...globalfonts.semi_bold,
            fontSize: 12,
            marginTop: 20,
          }}>
          Delivery service coming soon! Stay tuned for convenient delivery
          options to enjoy your favorite dishes in the comfort of your home.
        </Text>
      </View>
    </RootLayout>
  );
};

export default Delivery;

const styles = StyleSheet.create({});
