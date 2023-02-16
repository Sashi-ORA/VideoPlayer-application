import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DoubleTapComponent from "./TapComponent";
import SingleTapComponent from "./SingleTapComponent";

const VideoPlayerComponent = () => {
  const [showControls, setShowControls] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowControls(false), 3000);
  }, []);
  useMemo(() => {
    setTimeout(() => setShowControls(false), 5000);
  }, [showControls]);

  const handleLeftTap = () => {
    console.log("left tap");
  };
  const handleRightTap = () => {
    console.log("right tap");
  };
  const handlePlayPause = () => {
    console.log("Play pause tap");
  };
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground> */}
      <SingleTapComponent
        style={styles.tapContainer}
        setShowControls={setShowControls}
        showControls={showControls}
      >
        {showControls && (
          <View style={styles.tapContainer}>
            <DoubleTapComponent
              style={styles.leftTap}
              setShowControls={setShowControls}
              showControls={showControls}
            >
              <Text style={{ color: "white" }}>Left</Text>
            </DoubleTapComponent>
            <SingleTapComponent
              style={styles.playPause}
              setShowControls={setShowControls}
              showControls={showControls}
            >
              <Text style={{ color: "white" }}>Play Pause</Text>
            </SingleTapComponent>
            <DoubleTapComponent
              style={styles.rightTap}
              setShowControls={setShowControls}
              showControls={showControls}
            >
              <Text style={{ color: "white" }}>Right</Text>
            </DoubleTapComponent>
          </View>
        )}
      </SingleTapComponent>

      {/* <View style={styles.videoContainer}>
        <Text>Video</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
  },
  tapContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  playPause: {
    flex: 2,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  leftTap: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  rightTap: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default VideoPlayerComponent;
