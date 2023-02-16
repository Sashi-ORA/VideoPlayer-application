import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const DoubleTapComponent = ({
  children,
  style,
  setShowControls,
  showControls,
}) => {
  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(1)
    .onStart(() => {
      console.log("single tap");
      setShowControls(!showControls);
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      console.log("double tap");
    });

  return (
    <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>
      <View style={style}>{children}</View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({});
export default DoubleTapComponent;
