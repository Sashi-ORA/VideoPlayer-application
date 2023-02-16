import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DoubleTapComponent from "./TapComponent";
import SingleTapComponent from "./SingleTapComponent";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import ProgressBar from "./ProgressBar";
const VideoPlayerComponent = () => {
  const [showControls, setShowControls] = useState(true);
  const [playPause, setPlayPause] = useState(true);
  const [playBackStatus, setPlayBackStatus] = useState({
    totalMilli: 0,
    completedMillis: 0,
    pendingPercentage: 0,
  }); //for progress bar
  useEffect(() => {
    setTimeout(() => setShowControls(false), 5000);
  }, []);
  useMemo(() => {
    console.log("show cntrols", showControls);
    setTimeout(() => setShowControls(false), 5000);
  }, [showControls]);

  const handlePlayback = (data) => {
    setPlayBackStatus({
      totalMilli: data.durationMillis,
      completedMillis: data.positionMillis,
      pendingPercentage:
        100 -
        Math.floor(
          ((data.durationMillis - data.positionMillis) / data.durationMillis) *
            100
        ),
    });
  };
  return (
    <View style={styles.container}>
      <Video
        // onLoad={handlePress}
        onPlaybackStatusUpdate={handlePlayback}
        // positionMillis={10000}
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
          <View style={{ flex: 1, marginBottom: 10 }}>
            <View style={styles.controlsContainer}>
              <DoubleTapComponent
                style={styles.leftTap}
                setShowControls={setShowControls}
                showControls={showControls}
              >
                <AntDesign name="stepbackward" size={30} color="white" />
              </DoubleTapComponent>
              <SingleTapComponent
                style={styles.playPause}
                setShowControls={setShowControls}
                showControls={showControls}
                setPlayPause={setPlayPause}
                playPause={playPause}
              >
                {playPause ? (
                  <Ionicons name="pause" size={40} color="white" />
                ) : (
                  <AntDesign name="caretright" size={30} color="white" />
                )}
              </SingleTapComponent>
              <DoubleTapComponent
                style={styles.rightTap}
                setShowControls={setShowControls}
                showControls={showControls}
              >
                <AntDesign name="stepforward" size={30} color="white" />
              </DoubleTapComponent>
            </View>
            <ProgressBar
              style={{
                width: `${playBackStatus.pendingPercentage}%`,
              }}
            />
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
