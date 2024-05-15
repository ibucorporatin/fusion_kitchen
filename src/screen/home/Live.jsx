import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootLayout from '../../globalComponents/RootLayout';
import {globalfonts} from '../../styles/fonts';

const Live = () => {
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
          source={require('../../../assets/images/live.png')}
        />
        <Text
          style={{
            color: '#001C00',
            ...globalfonts.semi_bold,
            fontSize: 12,
            marginTop: 20,
          }}>
          Live events coming soon! Experience exciting live entertainment while
          enjoying your meals. Stay tuned for upcoming events and performances!
        </Text>
      </View>
    </RootLayout>
  );
};

export default Live;

const styles = StyleSheet.create({});
