import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootLayout from '../../globalComponents/RootLayout';
import {globalfonts} from '../../styles/fonts';

const Dinning = () => {
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
          source={require('../../../assets/images/dinning-room.png')}
        />
        <Text
          style={{
            color: '#001C00',
            ...globalfonts.semi_bold,
            fontSize: 12,
            marginTop: 20,
          }}>
          Dining experience coming soon! Get ready to savor delicious meals in a
          cozy atmosphere with friends and family. Stay tuned for updates!
        </Text>
      </View>
    </RootLayout>
  );
};

export default Dinning;

const styles = StyleSheet.create({});
