import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import VideoListScreen from "./screens/VideoListScreen";
import AvailableVideosList from "./components/AvailableVideosList";

export default function App() {
  // const Stack = createStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      {/* <VideoListScreen /> */}
      <AvailableVideosList />
      {/* <Stack.Navigator>
        <Stack.Screen name="VideoList" component={AvailableVideosList} />
        <Stack.Screen name="VideoPlayer" component={VideoListScreen} />
      </Stack.Navigator> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
