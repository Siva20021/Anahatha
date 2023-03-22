import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import VerificationSuccess from "./VerificationSuccess.js";
import axios from "axios";
const VerifyDoctor = ({ navigation }) => {
  const [code, setCode] = useState("");
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const handleCodeChange = (value, index) => {
    const newCode = code.split("");
    newCode[index] = value;
    setCode(newCode.join(""));

    // Move focus to the next TextInput component
    if (value && index < 5) {
      refs[index + 1].focus();
    }
  };

  const handleVerify = () => {
    navigation.navigate("VerificationSuccess");
  };
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/doctorVerification.json")}
        autoPlay
        style={{ width: 300, height: 300 }}
      />

      <Text style={styles.heading}>Enter the 6 Digit Medical ID</Text>
      <View style={styles.OTPcontainer}>
        <TextInput
          style={styles.input}
          maxLength={1}
          value={code[0]}
          onChangeText={(value) => handleCodeChange(value, 0)}
          ref={refs[0]}
        />
        <TextInput
          style={styles.input}
          maxLength={1}
          value={code[1]}
          onChangeText={(value) => handleCodeChange(value, 1)}
          ref={refs[1]}
        />
        <TextInput
          style={styles.input}
          maxLength={1}
          value={code[2]}
          onChangeText={(value) => handleCodeChange(value, 2)}
          ref={refs[2]}
        />
        <TextInput
          style={styles.input}
          maxLength={1}
          value={code[3]}
          onChangeText={(value) => handleCodeChange(value, 3)}
          ref={refs[3]}
        />
        <TextInput
          style={styles.input}
          maxLength={1}
          value={code[4]}
          onChangeText={(value) => handleCodeChange(value, 4)}
          ref={refs[4]}
        />
        <TextInput
          style={styles.input}
          maxLength={1}
          value={code[5]}
          onChangeText={(value) => handleCodeChange(value, 5)}
          ref={refs[5]}
        />
      </View>
      <TouchableOpacity onPress={handleVerify}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Verify</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyDoctor;

const styles = StyleSheet.create({
  OTPcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginBottom: 40,
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
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    width: 40,
    height: 40,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
