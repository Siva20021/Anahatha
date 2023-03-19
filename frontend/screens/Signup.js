import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { loginStart, loginSuccess } from "../redux/userSlice";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async () => {
    // Define the user object with the required fields
    if (!email || !password || !age || !gender || !name) {
      alert("All fields are required ");
    } else {
      try {
        dispatch(loginStart());
        const response = await axios.post(
          "https://e1e3-183-82-24-8.in.ngrok.io/signup",
          {
            email: email,
            password: password,
            age: age,
            sex: gender,
            name: name,
          }
        );
        console.log(response.data.data);
        dispatch(loginSuccess(response.data.data));
        navigation.navigate("HeartDiseasePredictor");
      } catch (error) {
        console.log(error);
      }
    }

    // Make the POST request to the /signup endpoint
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
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
