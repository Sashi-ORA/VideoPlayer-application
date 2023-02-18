import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

const ProgressBar = ({ style, playBackStatus, setPlayBackStatus }) => {
  // const [dimention, setDimention] = useState({ x: 0, width: 0 });
  // const [touchPosition, setTouchPosition] = useState(0);
  // const [styleWidth, setStyleWidth] = useState(0);

  // useEffect(() => {
  //   const tempPercentage = Math.floor(
  //     (Math.floor(touchPosition) / Math.floor(dimention.width)) * 100
  //   );
  //   console.log("Play back status", playBackStatus);
  //   console.log("tempPercentage----", tempPercentage);
  //   setPlayBackStatus({
  //     ...playBackStatus,
  //     completedMillis: (playBackStatus.completedMillis * tempPercentage) / 100,
  //     pendingPercentage: Math.floor(
  //       (tempPercentage / 100) * playBackStatus.totalMilli
  //     ),
  //   });
  // }, [touchPosition]);

  // const handleComponentPosition = (event) => {
  //   var { x, y, width, height } = event.nativeEvent.layout;
  //   setDimention({ x: x, width: width });
  // };
  // const handlePress = (evt) => {
  //   setTouchPosition(evt.nativeEvent.locationX);
  // };
  return (
    // <Pressable
    //   onPress={handlePress}
    //   style={{
    //     height: 10,
    //     justifyContent: "center",
    //     backgroundColor: "red",
    //     height: 15,
    //   }}
    // >
    // <View style={styles.container} onLayout={handleComponentPosition}>
    <View style={styles.container}>
      <View style={styles.back} />
      <View style={[styles.front, style]} />
    </View>
    // </Pressable>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },
  container: {
    height: 5,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    backgroundColor: "#706d6d",
  },
  front: {
    width: "50%",
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
export default ProgressBar;
