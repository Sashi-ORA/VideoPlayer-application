import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import VideoListScreen from "./screens/VideoListScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <VideoListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
