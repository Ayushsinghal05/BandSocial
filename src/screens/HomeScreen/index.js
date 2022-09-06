import React, { useState } from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  useColorScheme,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
import Header from './header.js';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'

const InstrumentPicker = (props) => {
  const navigation = useNavigation()
  const [firstInstrument, setFirstInstrument] = useState();
  const [secondInstrument, setSecondInstrument] = useState();
  const [firstProficiency, setFirstProficiency] = useState();
  const [secondProficiency, setSecondProficiency] = useState();
  console.log('====>', navigation)
  const onSignInPress= () => {
    props.navigation.push("Instrument");
    }
  return (
    <ScrollView style={styles.container} >
      <Header title="Instrument Selection" />
      <Text style={styles.introText} >Let's get started! From the options belowed, select the instruments you are proficient in, followed by your level of proficiency. If you do not find your instrument listed, use the text input given below. </Text>

      <Text style={styles.introText}>
        Select your first choice of instrument:
      </Text>

      <Picker
        selectedValue={firstInstrument}
        onValueChange={(itemValue, itemIndex) =>
          setFirstInstrument(itemValue)
        }>
        <Picker.Item label="Piano" value="piano" />
        <Picker.Item label="Violin" value="violin" />
        <Picker.Item label="Viola" value="viola" />
        <Picker.Item label="Drums" value="drums" />
        <Picker.Item label="Cello" value="cello" />
        <Picker.Item label="Saxophobe" value="saxophone" />
        <Picker.Item label="Trumpet" value="trumpet" />
      </Picker>

      <Text style={styles.introText}>
        Select your proficiency with this instrument:
      </Text>

      <Picker
        selectedValue={firstProficiency}
        onValueChange={(itemValue, itemIndex) =>
          setFirstProficiency(itemValue)
        }>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>

      <Text> </Text>

      <Text style={styles.introText}>
        Select your second choice of instrument:
      </Text>

      <Picker
        selectedValue={secondInstrument}
        onValueChange={(itemValue, itemIndex) =>
          setSecondInstrument(itemValue)
        }>
        <Picker.Item label="Piano" value="piano" />
        <Picker.Item label="Violin" value="violin" />
        <Picker.Item label="Viola" value="viola" />
        <Picker.Item label="Drums" value="drums" />
        <Picker.Item label="Cello" value="cello" />
        <Picker.Item label="Saxophobe" value="saxophone" />
        <Picker.Item label="Trumpet" value="trumpet" />
      </Picker>

      <Text style={styles.introText}>
        Select your proficiency with this instrument:
      </Text>

      <Picker
        selectedValue={secondProficiency}
        onValueChange={(itemValue, itemIndex) =>
          setSecondProficiency(itemValue)
        }>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      <ScrollView style={styles.space} />
      <Button
        onPress= {(onSignInPress)}
        title="Continue"
        color="#841584"
        style={styles.btn}
        accessibilityLabel="Click this button to move to the next page."
      />

    </ScrollView>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
    },
    introText: {
      paddingTop: 12,
      fontSize: 20,
      paddingBottom: 15,
      paddingLeft: 5,
    },
    bodyText: {
      paddingTop: 12,
      fontSize: 16,
      paddingBottom: 15,
      paddingLeft: 5,
    },
    picker: {
      paddingLeft: 5,
      paddingRight: 5,
    },
    space: {
      width: 20,
      height: 50,
    }
  });
export default InstrumentPicker;