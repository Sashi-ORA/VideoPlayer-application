import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const DoubleTapComponent = ({
  children,
  style,
  name,
  setShowControls,
  setSkipTo,
  playBackStatus,
}) => {
  const handleRightSkip = (data) => {
    console.log("right", data);
    const temp =
      data.completedMillis <= data.totalMilli && data.completedMillis + 10000;
    setSkipTo(temp);
  };
  const handleLeftSkip = (data) => {
    console.log("left", data);
    const temp = data.completedMillis > 0 && data.completedMillis - 10000;
    setSkipTo(temp);
  };
  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      console.log(`double tap ${name}`);
      // setShowControls(true);
      name == "right"
        ? handleRightSkip(playBackStatus)
        : handleLeftSkip(playBackStatus);
    });

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(1)
    .onStart(() => {
      console.log(`Single tap ${name}`);
      setShowControls(true);
    });

  return (
    <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>
      <View style={style}>{children}</View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({});
export default DoubleTapComponent;
