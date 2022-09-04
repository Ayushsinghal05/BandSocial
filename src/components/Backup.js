import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Auth} from 'aws-amplify';

const Index = () =>{
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View style = {{flex:1}}>
      <Text style= {{fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
      <Text 
        onPress = {signOut}
        style = {{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}>
        Sign Out
      </Text>
    </View>
  );
};

export default Index;