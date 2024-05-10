import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Home = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const onAddPress = () => {
    if (item) {
      const data = {
        name: item,
        checked: false,
        id: Date.now(),
      };
      setList(prev => [...prev, data]);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 10,
          fontWeight: '700',
        }}>
        Todo
      </Text>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TextInput
          value={item}
          placeholder="add list"
          onChangeText={value => {
            setItem(value);
          }}
          style={{
            borderWidth: 1,
            borderColor: '#000',
            width: '60%',
            paddingHorizontal: 10,
          }}
        />
        <Button title="Add" onPress={onAddPress} />
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginHorizontal:30
        }}>
        {list.map(item => {
          return (
            <View style={{flexDirection:"row"}} key={item.id}>
              <Text style={{
                fontSize:18
              }} >{item.name}</Text>


            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
