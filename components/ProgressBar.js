import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

const ProgressBar = ({ style, playBackStatus, setSkipTo }) => {
  const [dimention, setDimention] = useState({ x: 0, width: 0 });

  const handleComponentPosition = (event) => {
    var { x, width } = event.nativeEvent.layout;
    setDimention({ x: x, width: width });
  };
  const handlePress = (evt) => {
    const tempPercentage = Math.floor(
      (Math.floor(evt.nativeEvent.locationX) / Math.floor(dimention.width)) *
        100
    );
    const completedMilli = playBackStatus.totalMilli * (tempPercentage / 100);
    setSkipTo(completedMilli);
  };
  return (
    <Pressable
      onPress={handlePress}
      style={{
        justifyContent: "center",
        height: 15,
        flex: 4,
      }}
    >
      <View style={styles.container} onLayout={handleComponentPosition}>
        <View style={styles.back} />
        <View style={[styles.front, style]} />
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
