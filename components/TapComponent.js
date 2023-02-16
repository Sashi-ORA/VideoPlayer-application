import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const DoubleTapComponent = () => {
  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(1)
    .onStart(() => {
      Alert.alert("Single tap!");
      console.log("Double tap");
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      Alert.alert("Double tap!");
      console.log("single tap");
    });

  return (
    <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
});
export default DoubleTapComponent;
