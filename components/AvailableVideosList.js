import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import VideoCard from "./VideoCard";
import { Camera } from "expo-camera";

const AvailableVideosList = () => {
  const [localAssets, setLocalAssets] = useState([]);

  const renderItem = ({ item }) => {
    return <VideoCard item={item} />;
  };

  async function getVideos() {
    const { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: "video",
      sortBy: MediaLibrary.SortBy.creationTime,
    });
    setLocalAssets(assets);
  }

  async function permission() {
    let { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      // handle permission denied
      status = await Camera.requestCameraPermissionsAsync();
    } else {
      // permission granted, access videos here
      getVideos();
    }
  }

  useEffect(() => {
    permission();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={localAssets} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
});
export default AvailableVideosList;
