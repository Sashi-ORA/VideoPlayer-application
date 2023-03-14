import VideoPlayer from "../components/VideoPlayer";
import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import ExpoVideoPlayer from "../components/ExpoVideoPlayer";
import AvailableVideosList from "../components/AvailableVideosList";

const VideoListScreen = () => {
  return (
    <GestureHandlerRootView style={styles.videoContainer}>
      <VideoPlayer />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    // borderWidth: 5,
    borderColor: "black",
  },
});
export default VideoListScreen;
