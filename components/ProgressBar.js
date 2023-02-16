import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const ProgressBar = ({ style }) => {
  console.log("style---------------", style);
  return (
    <View style={styles.container}>
      {/* <Text>ProgressBar</Text> */}
      <View style={styles.back} />
      <View style={[styles.front, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },
  container: {
    height: 10,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
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
