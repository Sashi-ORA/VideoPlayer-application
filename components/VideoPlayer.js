import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DoubleTapComponent from "./TapComponent";
import SingleTapComponent from "./SingleTapComponent";
import { Video } from "expo-av";
const VideoPlayerComponent = () => {
  const [showControls, setShowControls] = useState(true);
  const [playPause, setPlayPause] = useState(true);
  let a;
  useEffect(() => {
    setTimeout(() => setShowControls(false), 5000);
  }, []);
  useMemo(() => {
    a = setTimeout(() => setShowControls(false), 5000);
  }, [showControls]);

  const handleControlToggle = () => setShowControls(!showControls);

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={{
          uri: "https://tinypng.com/images/social/website.jpg",
        }}
        resizeMode="cover"
        style={styles.image}
      /> */}
      <Video
        // onLoad={handlePress}
        // onPlaybackStatusUpdate={handlePlayback}
        // //   positionMillis={10000}
        // ref={videoRef}
        // onFullscreenUpdate={handleFullScreenUpdate}
        //   rate={1}
        style={styles.video}
        source={require("../test.mp4")}
        // useNativeControls
        resizeMode="contain"
        shouldPlay={playPause}
      />
      <DoubleTapComponent
        style={styles.tapContainer}
        setShowControls={setShowControls}
        showControls={showControls}
      >
        {showControls && (
          <View style={styles.controlsContainer}>
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
              setPlayPause={setPlayPause}
              playPause={playPause}
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
      </DoubleTapComponent>
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
  },
  controlsContainer: {
    flexDirection: "row",
    flex: 1,
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
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});
export default VideoPlayerComponent;
