import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import VideoListScreen from "./screens/VideoListScreen";
import AvailableVideosList from "./components/AvailableVideosList";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      {/* <VideoListScreen /> */}
      {/* <AvailableVideosList /> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="videoList"
          // screenOptions={{ headersShown: false }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="videoList"
            component={AvailableVideosList}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="videoPlayer"
            component={VideoListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
