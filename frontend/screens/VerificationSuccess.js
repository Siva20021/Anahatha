import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const VerificationSuccess = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate("Blog");
  };
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/verificationSuccess.json")}
        autoPlay
        loop={false}
        style={{ width: 300, height: 300 }}
      />
      <TouchableOpacity onPress={handleContinue}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#82AAE3",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
