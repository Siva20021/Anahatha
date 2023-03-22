import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [doc, setDoc] = const [state, setstate] = useState(initialState)("");
  if (user.doctor) {
    setDoc("doctor");
  } else {
    setDoc("patient");
  }
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/icon.png")} style={styles.image} />
      </View>
      <Text style={styles.header}>User Profile</Text>
      <View style={styles.content}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{user.age}</Text>

        <Text style={styles.label}>Sex:</Text>
        <Text style={styles.value}>{user.sex}</Text>

        <Text style={styles.label}>Role:</Text>
        <Text style={styles.value}>{user.doctor}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
