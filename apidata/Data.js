import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, StyleSheet, Text, Image, SafeAreaView} from 'react-native';

export const Data = () => {
  const [data, setData] = useState([]);
  // fetching DATA
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/2`).then((res) => {
      const users = res.data.data;
      debugger;
      setData([users]);
    });
  }, []);

  const user = data.map((user) => {
    return (
      <View key={user.id}>
        <SafeAreaView style={{borderWidth: 0.5, justifyContent: 'center'}}>
          <Image
            style={styles.stretch}
            source={{uri: 'https://reqres.in/img/faces/2-image.jpg'}}
          />
          <Text>First Name:-{user.first_name}</Text>
          <Text>Last Name:-{user.last_name}</Text>
          <Text>Email:-{user.email}</Text>
        </SafeAreaView>
      </View>
    );
  });

  return <Text>{user}</Text>;
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 50,
  },
});
