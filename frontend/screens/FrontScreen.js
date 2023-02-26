import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import DancingScript from "../assets/fonts/DancingScript-Regular.ttf";
const FrontScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    Dancingscript: DancingScript,
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/BrandName.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>
          "An ounce of prevention is worth a pound of cure.."
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          {/* <Icon name="log-in-outline" size={24} color="white" /> */}
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 20,
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  quoteContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: -70,
  },
  quoteText: {
    fontSize: 36,

    textAlign: "center",
    marginHorizontal: 30,
    fontFamily: "Dancingscript",
    color: "black",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#82AAE3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    height: 70,
    width: 200,
    marginTop: -70,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FrontScreen;
