import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

const ProgressBar = ({
  style,
  playBackStatus,
  setPlayBackStatus,
  setSkipTo,
}) => {
  const [dimention, setDimention] = useState({ x: 0, width: 0 });
  const [touchPosition, setTouchPosition] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const tempPercentage = Math.floor(
      (Math.floor(touchPosition) / Math.floor(dimention.width)) * 100
    );
    setWidth(tempPercentage);
    console.log(touchPosition);
  }, [touchPosition]);

  const handleComponentPosition = (event) => {
    console.log("component position ");
    var { x, y, width, height } = event.nativeEvent.layout;
    setDimention({ x: x, width: width });
  };
  const handlePress = (evt) => {
    console.log("pressed ");
    setTouchPosition(evt.nativeEvent.locationX);
  };
  return (
    <Pressable
      onPress={handlePress}
      style={{
        justifyContent: "center",
        height: 15,
        marginTop: 100,
        backgroundColor: "green",
      }}
    >
      <View style={styles.container} onLayout={handleComponentPosition}>
        <View style={styles.back} />
        <View style={[styles.front, style, { width: `${width}%` }]} />
      </View>
    </Pressable>
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
