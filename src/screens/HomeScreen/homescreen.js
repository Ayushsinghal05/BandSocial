// import React, {useState} from 'react';
// //import type {Node} from 'react';
// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   Alert,
//   useColorScheme,
// } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Slider from '@react-native-community/slider';
// import Header from './header.js';
// import {Picker} from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';
// import {useForm} from 'react-hook-form'


// const InstrumentPicker = () => {
//   const {handleSubmit} = useForm();
//   const navigation = useNavigation();
//   const [firstInstrument, setFirstInstrument] = useState();
//   const [secondInstrument, setSecondInstrument] = useState();
//   const [firstProficiency, setFirstProficiency] = useState();
//   const [secondProficiency, setSecondProficiency] = useState();
//   const onSignInPress= () => {
//     navigation.navigate('Instrument')
//   }
//   return(
//     <ScrollView style={styles.container} >
//       <Header title="Instrument Selection" />
//       <Text style={styles.introText} >Let's get started! From the options belowed, select the instruments you are proficient in, followed by your level of proficiency. If you do not find your instrument listed, use the text input given below. </Text>
      
//       <Picker
//         selectedValue={firstInstrument}
//         onValueChange={(itemValue, itemIndex) =>
//           setFirstInstrument(itemValue)
//         }>
//         <Picker.Item label="Select your first choice of instrument:" value="none" />
//         <Picker.Item label="Piano" value="piano" />
//         <Picker.Item label="Violin" value="violin" />
//         <Picker.Item label="Viola" value="viola" />
//         <Picker.Item label="Drums" value="drums" />
//         <Picker.Item label="Cello" value="cello" />
//         <Picker.Item label="Saxophone" value="saxophone" />
//         <Picker.Item label="Trumpet" value="trumpet" />
//       </Picker>

//       <Picker
//         selectedValue={firstProficiency}
//         onValueChange={(itemValue, itemIndex) =>
//           setFirstProficiency(itemValue)
//         }>
//         <Picker.Item label="Select your proficiency with this instrument:" value="none" />
//         <Picker.Item label="1" value="1" />
//         <Picker.Item label="2" value="2" />
//         <Picker.Item label="3" value="3" />
//         <Picker.Item label="4" value="4" />
//         <Picker.Item label="5" value="5" />
//       </Picker>

//       <Text> </Text>

//       <Picker
        
//         selectedValue={secondInstrument}
//         onValueChange={(itemValue, itemIndex) =>
//           setSecondInstrument(itemValue)
//         }>
//         <Picker.Item label="Select your second choice of instrument:" value="none" />
//         <Picker.Item label="Piano" value="piano" />
//         <Picker.Item label="Violin" value="violin" />
//         <Picker.Item label="Viola" value="viola" />
//         <Picker.Item label="Drums" value="drums" />
//         <Picker.Item label="Cello" value="cello" />
//         <Picker.Item label="Saxophone" value="saxophone" />
//         <Picker.Item label="Trumpet" value="trumpet" />
//       </Picker> 

//       <Picker
//         selectedValue={secondProficiency}
//         onValueChange={(itemValue, itemIndex) =>
//           setSecondProficiency(itemValue)
//         }>
//         <Picker.Item label="Select your proficiency with this instrument:" value="none" />
//         <Picker.Item label="1" value="1" />
//         <Picker.Item label="2" value="2" />
//         <Picker.Item label="3" value="3" />
//         <Picker.Item label="4" value="4" />
//         <Picker.Item label="5" value="5" />
//       </Picker> 
//       <ScrollView style={styles.space} />
//       <Button
//         title="Continue"
//         color="#841584"
//         style={styles.btn}
//         accessibilityLabel="Click this button to move to the next page."
//         onPress= {handleSubmit(onSignInPress)}
//       />

//     </ScrollView>
    
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 0,
//   },
//   introText: {
//     paddingTop: 5,
//     fontSize: 10,
//     paddingBottom: 5,
//     paddingLeft: 5,
//   },
//   picker: {
//     paddingLeft: 5,
//     paddingRight: 5,
//   },
//   space: {
//     width: 10, 
//     height: 50,
//   },
// });

// export default InstrumentPicker;