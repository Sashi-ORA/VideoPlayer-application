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
    .maxDuration(1000)
    .numberOfTaps(1)
    .onStart(() => {
      // console.log("singleTap");
      setShowControls(!showControls);
      // setShowControls(true);
    });

  return (
    <GestureDetector gesture={singleTap}>
      <View style={style}>{children}</View>
    </GestureDetector>
  );
};

export default SingleTapComponent;
