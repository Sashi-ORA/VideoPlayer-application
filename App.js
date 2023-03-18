import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { useReducer } from "react";

import VideoListScreen from "./screens/VideoListScreen";
import AvailableVideosList from "./components/AvailableVideosList";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyContext from "./context/VideoContext";
import videoReducer from "./reducer/VideoUrlReducer";

export default function App() {
  const [videourl, dispatch] = useReducer(videoReducer, "");
  const Stack = createNativeStackNavigator();

  return (
    <MyContext.Provider value={{ videourl, dispatch }} style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="videoList">
          <Stack.Screen
            // options={{ headerShown: false }}
            name="your videos"
            component={AvailableVideosList}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="videoPlayer"
            component={VideoListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
