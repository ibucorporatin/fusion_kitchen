import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';

const CustomBanner = ({
  list,
  marginHPercent = 5,
  heightPercent = 30,
  ...props
}) => {
  const {height, width} = useWindowDimensions();
  const marginHorizontal = (width * marginHPercent) / 100;
  const bannerWidth = width - 2 * marginHorizontal;
  const bannerHeight = (height * heightPercent) / 100;
  const isLandscape = width > height;

  // image dot indicate state and function function
  const [imageActive, setImageActive] = useState(0);
  const onChangeEventListener = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.round(nativeEvent.contentOffset.x / bannerWidth);
      if (slide != imageActive) {
        setImageActive(slide);
      }
    }
  };

  return (
    <View style={[{marginHorizontal}, styles.container, props?.container]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={({nativeEvent}) => onChangeEventListener(nativeEvent)}>
        {/* Property Image */}
        {list?.map((uri, index) => {
          return (
            <TouchableOpacity activeOpacity={0.8} key={index}>
              <Image
                resizeMode="cover"
                source={{uri}}
                style={{
                  height: isLandscape ? bannerHeight * 2 : bannerHeight,
                  width: bannerWidth,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* image dot indicator */}
      {list?.length > 0 ? (
        <View style={styles.dotcontainer}>
          {list.map((image, index) => (
            <Text
              key={index}
              style={
                imageActive === index ? styles.dotActive : styles.inActive
              }>
              •
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default CustomBanner;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: '5%',
    marginBottom: '10%',
  },
  dotcontainer: {
    position: 'absolute',
    bottom: '-5%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: '#FF0000',
    fontSize: 30,
  },
  inActive: {
    margin: 3,
    color: '#fff',
    fontSize: 30,
  },
});
