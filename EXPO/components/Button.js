import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme }) {
  if (theme === "primary"){
    // NO SHOWING NOTHING CHECK IT OUT MIGHT BE FOR DIFF CONFIG CHECK IN GIT DIFF
    return (
      <View style={[styles.buttonContainer, {borderWidth: 4, borderColor:"#ffd33d", borderRadius: 18}]}>
        <Pressable 
          style={[styles.button, {backgroundColor:"#fff"}]} 
          onPress={() => alert('You pressed a button.')}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
            />
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  
  return(
    <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={()=> alert('You pressed a button.')}>
    <Text style={styles.buttonLabel}>{label}</Text>

    </Pressable>
    <FontAwesome 
      name="picture-o"
      size={18}
      color={"#25292e"}
      style={styles.buttonIcon} 
      />
  </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    // width: '100%',
    // height: '50%',
    flex:1/3,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    margin:3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
