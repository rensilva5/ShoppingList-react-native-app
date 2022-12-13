import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React Native</Text>
      <Text style={styles.text}>This is Renzo creating</Text>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/9.jpg'}} style={styles.img}/>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "darkblue",
    fontSize: 35,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  }
})

export default App;