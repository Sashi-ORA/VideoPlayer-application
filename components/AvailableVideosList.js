import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import VideoCard from "./VideoCard";

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
    const { granted, canAskAgain } = await MediaLibrary.getPermissionsAsync();
    console.log("status", granted);
    if (granted) {
      getVideos();
    } else if (canAskAgain) {
      const resp = await MediaLibrary.requestPermissionsAsync();
      console.log(resp);
      permission();
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
  },
});
export default AvailableVideosList;
