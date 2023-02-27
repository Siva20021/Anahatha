import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import IBMPlexSans from "../assets/fonts/IBMPlexSans-Regular.ttf";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";

const screenWidth = Dimensions.get("window").width;
const HeartDiseasePredictorScreen = () => {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [cp, setCp] = useState("");
  const [trestbps, setTrestbps] = useState("");
  const [chol, setChol] = useState("");
  const [fbs, setFbs] = useState("");
  const [restecg, setRestecg] = useState("");
  const [thalach, setThalach] = useState("");
  const [exang, setExang] = useState("");
  const [oldpeak, setOldpeak] = useState("");
  const [slope, setSlope] = useState("");
  const [ca, setCa] = useState("");
  const [thal, setThal] = useState("");
  const [loaded] = useFonts({
    IBM: IBMPlexSans,
  });
  if (!loaded) {
    return null;
  }
  const handlePredict = () => {
    // Perform prediction logic here
    console.log(
      `Predicting with age: ${age}, sex: ${sex}, cp: ${cp}, trestbps: ${trestbps}, chol: ${chol}, fbs: ${fbs}, restecg: ${restecg}, thalach: ${thalach}, exang: ${exang}, oldpeak: ${oldpeak}, slope: ${slope}, ca: ${ca}, thal: ${thal}`
    );
  };
  const handleSubmit = () => {
    // Perform submission logic here
    console.log({
      age,
      sex,
      cp,
      trestbps,
      chol,
      fbs,
      restecg,
      thalach,
      exang,
      oldpeak,
      slope,
      ca,
      thal,
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/HeartDiseaseContainer.png")}
        style={styles.heartDiseaseContainer}
      >
        <Text style={styles.heading}>Heart Disease Predictor</Text>
        <ScrollView>
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
              value={sex}
              onChangeText={setSex}
              keyboardType="numeric"
              placeholder="sex"
            />
          </View>
          <View style={styles.Row2}>
            <TextInput
              style={styles.input3}
              value={cp}
              onChangeText={setCp}
              keyboardType="numeric"
              placeholder="Cplevel"
            />
            <TextInput
              style={styles.input2}
              value={trestbps}
              onChangeText={setTrestbps}
              keyboardType="numeric"
              placeholder="TrestBps lvl"
            />
            <TextInput
              style={styles.input3}
              value={chol}
              onChangeText={setChol}
              keyboardType="numeric"
              placeholder="Cholestrol"
            />
          </View>
          <View style={styles.Row2}>
            <TextInput
              style={styles.input3}
              value={fbs}
              onChangeText={setFbs}
              keyboardType="numeric"
              placeholder="Fbs"
            />
            <TextInput
              style={styles.input2}
              value={restecg}
              onChangeText={setRestecg}
              keyboardType="numeric"
              placeholder="Rest Ecg"
            />
            <TextInput
              style={styles.input3}
              value={thalach}
              onChangeText={setThalach}
              keyboardType="numeric"
              placeholder="Thalach"
            />
          </View>
          <View style={styles.Row2}>
            <TextInput
              style={styles.input3}
              value={exang}
              onChangeText={setExang}
              keyboardType="numeric"
              placeholder="Exang"
            />
            <TextInput
              style={styles.input2}
              value={oldpeak}
              onChangeText={setOldpeak}
              keyboardType="numeric"
              placeholder="Old peak"
            />
            <TextInput
              style={styles.input3}
              value={slope}
              onChangeText={setSlope}
              keyboardType="numeric"
              placeholder="Slope"
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.input2}
              value={ca}
              onChangeText={setCa}
              keyboardType="numeric"
              placeholder="ca"
            />
            <TextInput
              style={styles.input2}
              value={thal}
              onChangeText={setThal}
              keyboardType="numeric"
              placeholder="Thal"
            />
          </View>
        </ScrollView>
        <View style={styles.Row3}>
          <TouchableOpacity onPress={handlePredict}>
            <ImageBackground
              source={require("../assets/OK.png")}
              style={styles.button}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePredict}>
            <ImageBackground
              source={require("../assets/Reset.png")}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeartDiseasePredictorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#82AAE3",
  },
  heartDiseaseContainer: {
    height: 600,
    width: screenWidth,
    resizeMode: "cover",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontFamily: "IBM",
    marginBottom: 30,
    marginTop: 30,
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
  input3: {
    width: 90,
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
  Row2: {
    flexDirection: "row",
    gap: 20,
  },
  Row3: {
    flexDirection: "row",
    gap: 50,
    marginBottom: -30,
  },
  button: {
    height: 70,
    width: 70,
  },
  button2: {
    width: "50%",
    height: 50,
    backgroundColor: "#FF0000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontFamily: "IBM",
  },
});
