import { View, Text } from "react-native";
import React from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const SingleTapComponent = ({
  children,
  style,
  setShowControls,
  showControls,
}) => {
  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(1)
    .onStart(() => {
      setShowControls(!showControls);
    });

  return (
    <GestureDetector gesture={singleTap}>
      <View style={style}>{children}</View>
    </GestureDetector>
  );
};

export default SingleTapComponent;
