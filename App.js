import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

import  * as CircleButton from "./components/CircleButton";
import * as IconButton from "./components/IconButton";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {

  const [showAppOptions, setShowAppOptions] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null); //use this state variable to hold the URI of the selected image.

  const pickImageAsync = async () => {
    // pick image from library device function
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }

    // Icon buttons functions ↓
    const onReset = () => {
      setShowAppOptions(false);
    };
    const onAddSticker = () => {
      // to be implemented
    };
    const onSaveImageAsync = async () => {
      // to be implemented
    };

  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
        {showAppOptions ? (
           <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset}/>
              <CircleButton onPress={onAddSticker}/>
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
            </View>
           </View> ) : 
          (
          <View style={styles.footerContainer}>
            <Button
              label="Choose a photo"
              theme={"primary"}
              onPress={pickImageAsync}
              />
            <Button label="Use this photo"  onPress={() => setShowAppOptions(true)}/>
          </View>
        )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  // option buttons (2)
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  // option icons (3)
  optionsContainer:{
    position: 'absolute',
    bottom: 80
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
