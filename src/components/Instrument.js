
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
//import Header from './component/header.js';


const Instrument = () => {

  const [open2, setOpen2] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value2, setValue2] = useState(null);
  const [value1, setValue1] = useState(null);
  const [items, setItems] = useState([
    {label: 'Piano', value: 'piano'},
    {label: 'Violin', value: 'violin'},
    {label: 'Guitar', value: 'guitar'},
    {label: "Trumpet", value: 'trumpet'},
    {label: "Viola", value: "viola"},
  ]);

  return(
    <View style={styles.container} >
      <Header title="Instrument Selection" />
      <Text style={styles.introText} >Let's get started! From the options belowed, select the instruments you are proficient in, followed by your level of proficiency. If you do not find your instrument listed, use the text input given below. </Text>
      <DropDownPicker style={styles.picker}
        placeholder="Select your first choice of instrument."
        open={open1}
        value={value1}
        items={items}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems}
      />
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text style={styles.introText} ></Text>
      <DropDownPicker style={styles.picker}
        placeholder="Select your second choice of instrument."
        open={open2}
        value={value2}
        items={items}
        setOpen={setOpen2}
        setValue={setValue2}
        setItems={setItems}
      />
    </View>
    
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
  picker: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default Instrument;
