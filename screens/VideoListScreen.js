import VideoPlayer from "../components/VideoPlayer";
import { View, Text, StyleSheet } from "react-native";
import React from "react";

import VideoPlayerComponent from "../components/VideoPlayer";

const VideoListScreen = () => {
  return (
    <View style={styles.videoContainer}>
      <VideoPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    // backgroundColor: "red",
    borderWidth: 5,
    borderColor: "black",
  },
});
export default VideoListScreen;
