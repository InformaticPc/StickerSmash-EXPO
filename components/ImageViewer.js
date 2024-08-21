import { StyleSheet, Image } from "react-native-web";

export default function ImageViewer({placeHolderImageSource}) {
    return (
        <Image source={placeHolderImageSource} Style={styles.image}/> 
    
    );
}

const styles = StyleSheet.create({
    image:{
        width: 320,
        height: 440,
        boderRadius: 18,
    }
});