import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  const handleSignup = () => {
    // Perform login logic here
    if (!username || !password || !age || !sex || !name) {
      alert(
        "Please enter every fields Since all the fields are required and mandatory"
      );
      return;
    }
    console.log(
      `Logged in with username: ${username} and password: ${password}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
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
      <View style={styles.Row}>
        <TextInput
          style={styles.input2}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholder="Age"
        />
        <TextInput
          style={styles.input2}
          value={gender}
          onChangeText={setGender}
          keyboardType="numeric"
          placeholder="sex"
        />
      </View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your Full Name"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  input2: {
    width: 130,
    height: 50,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  Row: {
    flexDirection: "row",
    gap: 70,
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
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Signup;
