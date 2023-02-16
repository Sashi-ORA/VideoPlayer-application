import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DoubleTapComponent from "./TapComponent";

const VideoPlayerComponent = () => {
  const handleLeftTap = () => {
    console.log("left tap");
  };
  const handleRightTap = () => {
    console.log("right tap");
  };
  const handlePlayPause = () => {
    console.log("Play pause tap");
  };
  return (
    <View style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={handleLeftTap}>
        <View style={styles.leftTap}>
          <Text>Left Tap</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handlePlayPause}>
        <View style={styles.playPause}>
          <Text>play pause</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleRightTap}>
        <View style={styles.rightTap}>
          <Text>Right Tap</Text>
        </View>
      </TouchableWithoutFeedback> */}
      <GestureHandlerRootView>
        <DoubleTapComponent />
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  playPause: {
    flex: 2,
    borderRightColor: "red",
    borderRightWidth: 3,
    borderLeftColor: "red",
    borderLeftWidth: 3,
    // backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
  },
  leftTap: {
    flex: 1,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  rightTap: {
    flex: 1,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default VideoPlayerComponent;
