import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { store } from "./redux/store";
import HeartDiseasePredictorScreen from "./screens/HeartDiseasePredictorScreen";
import FrontScreen from "./screens/FrontScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";
import AskDoctor from "./screens/AskDoctor";
import VerifyDoctor from "./screens/VerifyDoctor";
import VerificationSuccess from "./screens/VerificationSuccess";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FrontScreen"
            component={FrontScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HeartDiseasePredictor"
            options={{ headerShown: false }}
          >
            {() => (
              <Tab.Navigator>
                <Tab.Screen
                  name="Tests"
                  component={HeartDiseasePredictorScreen}
                  options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name="clipboard-outline"
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                />

                <Tab.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name="person-outline"
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                />

                <Tab.Screen
                  name="Ask Doctor"
                  component={AskDoctor}
                  options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name="medkit-outline"
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Doctor Verification"
            component={VerifyDoctor}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="VerificationSuccess"
            component={VerificationSuccess}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
