import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import VideoListScreen from "./screens/VideoListScreen";
import AvailableVideosList from "./components/AvailableVideosList";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="videoList"
          // screenOptions={{ headersShown: false }}
        >
          <Stack.Screen
            // options={{ headerShown: false }}
            name="videos"
            component={AvailableVideosList}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="videoPlayer"
            component={VideoListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
