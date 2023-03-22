import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";
const AskDoctor = ({ navigation }) => {
  const doctorVerify = () => {
    navigation.navigate("Doctor Verification");
  };
  const patientVerify = () => {
    navigation.navigate("Blog");
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={doctorVerify}>
          <Text style={styles.buttonText}>Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={patientVerify} style={styles.button}>
          <Text style={styles.buttonText}>Patient</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AskDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    width: 200,
    height: 50,
    backgroundColor: "#82AAE3",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
