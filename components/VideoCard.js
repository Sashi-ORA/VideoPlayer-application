import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";

import { useNavigation } from "@react-navigation/native";
import MyContext from "../context/VideoContext";

const VideoCard = ({ item }) => {
  const { dispatch } = useContext(MyContext);
  const navigation = useNavigation();

  function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    let remainingMinutes = Math.floor(minutes % 60);
    let remainingSeconds = Math.floor(
      parseFloat(((minutes % 60) % 1).toFixed(2)) * 60
    );
    remainingMinutes =
      remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
    return `${hours}:${remainingMinutes}:${remainingSeconds}`;
  }

  function handleVideoPress(id) {
    dispatch({ type: "CURRENT_VIDEO", payload: item.uri });
    navigation.navigate("videoPlayer");
  }

  return (
    <Pressable style={styles.container} onPress={handleVideoPress}>
      <View style={styles.image}>
        <Image source={{ uri: item.uri }} style={{ width: 90, height: 70 }} />
        <View
          style={{
            width: "auto",
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            right: 0,
            opacity: 0.7,
            borderRadius: 5,
            padding: 5,
          }}
        >
          <Text style={{ color: "white" }}>
            {formatDuration(item["duration"] / 60)}
          </Text>
        </View>
      </View>
      <View style={{ width: "70%", paddingRight: 10 }}>
        <Text style={{ fontWeight: "bold" }}>
          {item.uri.split("/")[item.uri.split("/").length - 1]}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    borderRadius: 5,
    overflow: "hidden",
  },
});
export default VideoCard;
