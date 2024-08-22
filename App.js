import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from "./components/Button.js";
import ImageViewer from './components/ImageViewer.js';

const PlaceHolderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View styles={styles.imageContainer}>
         <ImageViewer placeHolderImageSource={PlaceHolderImage}/>
      </View>

      <View style={styles.footerContainer}>
        <Button label ="Choose a photo"/>
        <Button label= "Use this photo"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer:{
    flex: 1,
    paddingTop: 58,
  },
  //SOMETHNG WRONG DON'T DISPLAY NOTHING
});
