import React, {useEffect, useState} from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Instrument from '../components/Instrument';
import InstrumentPicker from '../screens/HomeScreen';
import {Auth, Hub, Analytics} from 'aws-amplify'
Analytics.configure({ disabled: true })

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [user, setUser] = useState();

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true})
      setUser(authUser)
    } catch (e) {
      setUser(null)
    }
  }

  useEffect(() => {
    checkUser()
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event == 'signIn' || data.payload.event == 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);
  /*if (user == !undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }*/
  console.log('=====>',user)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
          <Stack.Screen name="Home" component={InstrumentPicker} />
          <Stack.Screen name = "Instrument" component={Instrument}/> 
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            

          </>

        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation