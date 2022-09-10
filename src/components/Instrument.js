// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   StatusBar
// } from 'react-native'

// import MapView from 'react-native-maps';

// class DetailsScreen extends Component {
//   static navigationOptions = {
//     title: 'My App',
//     headerRIght: <View/>
//   }
// };
// export default () => (
//   <View style={styles.container}>
//     <MapView
//       style={styles.map}
//       region={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.015,
//         longitudeDelta: 0.0121,
//       }}
//     >
//     </MapView>
//   </View>
// );

// const styles = StyleSheet.create({
//  container: {
//    ...StyleSheet.absoluteFillObject,
//    height: 500,
//    width: 400,
//    justifyContent: 'flex-end',
//    alignItems: 'center',
//  },
//  map: {
//    ...StyleSheet.absoluteFillObject,
//  },
// });
// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   Dimensions,
//   ScrollView,

// } from 'react-native'
// import MapView from 'react-native-maps';

// const { width, height } = Dimensions.get('window');
// const SCREEN_WIDTH = width;
// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// export default class Analysis extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       },
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView
//           style={StyleSheet.absoluteFill}
//           contentContainerStyle={styles.scrollview}
//         >
//           <MapView
//             provider={this.props.provider}
//             style={styles.map}
//             scrollEnabled={true}
//             zoomEnabled={true}
//             pitchEnabled={true}
//             rotateEnabled={true}
//             initialRegion={this.state.region}
//           >
//             <MapView.Marker
//               title="This is a title"
//               description="This is a description"
//               coordinate={this.state.region}
//             />
//           </MapView>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   scrollview: {
//     alignItems: 'center',
//   },
//   map: {
//     width: SCREEN_WIDTH,
//     height: 250,
//   },
// });
import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
//import { GradientView } from '../../Common'
import MapView from 'react-native-maps';

export default class Instrument extends Component {
  render() {
    return (
      <View style={{ position: 'relative', height: '100%'}}>
        <MapView
          style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

    );
  }
}