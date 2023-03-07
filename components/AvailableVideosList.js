import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";

const AvailableVideosList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AvailableVideosList</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
export default AvailableVideosList;
