import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    // Perform login logic here
    console.log(
      `Logged in with username: ${username} and password: ${password}`
    );
    navigation.navigate("HeartDiseasePredictor");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableWithoutFeedback onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.h1}>If you are a new User? </Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingBottom: 70,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "100%",
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
  h1: {
    fontSize: 16,
  },
  signupText: {
    fontSize: 20,
  },
});

export default LoginScreen;
