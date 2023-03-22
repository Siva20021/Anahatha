import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { loginStart, loginSuccess } from "../redux/userSlice";
import Toast from "react-native-toast-message";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "All fields are required",
        visibilityTime: 3000,
        autoHide: true,
      });
    } else {
      try {
        dispatch(loginStart());
        const response = await axios.post(
          "https://8526-183-82-176-80.in.ngrok.io/login",
          {
            email: email,
            password: password,
          }
        );
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Logged In as " + email,
          visibilityTime: 3000,
          autoHide: true,
        });
        console.log(response.data);
        dispatch(loginSuccess(response.data));

        navigation.navigate("HeartDiseasePredictor");
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Check your email or password",
          visibilityTime: 3000,
          autoHide: true,
        });
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/doctor.png")}
        style={styles.loginImage}
      ></ImageBackground>
      <Text style={styles.heading}>Login</Text>
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
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.h1}>If you are a new User? </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
  h1: {
    fontSize: 16,
  },
  signupText: {
    fontSize: 20,
  },
  loginImage: {
    position: "relative",
    height: 300,
    width: 300,
    marginBottom: 40,
  },
});

export default LoginScreen;
