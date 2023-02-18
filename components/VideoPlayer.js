import { View, Text, StyleSheet, Pressable } from "react-native";
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
  const [skipTo, setSkipTo] = useState(0);
  const videoRef = React.useRef(null);

  useEffect(() => {
    setTimeout(() => setShowControls(false), 5000);
  }, []);
  useMemo(() => {
    // console.log("show cntrols", showControls);
    setTimeout(() => setShowControls(false), 5000);
  }, [showControls]);

  // useEffect(() => {
  //   if (skipTo !== null) {
  //     videoRef.current.pauseAsync();
  //     videoRef.current.playFromPositionAsync(playBackStatus.completedMillis);
  //     setSkipTo(playBackStatus.completedMillis);
  //   }
  // }, [skipTo]);
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

  const handleLeft = () => {
    // console.log("left/prev video");
  };
  const handlePlayPause = () => {
    setSkipTo(playBackStatus.completedMillis);
    setPlayPause(!playPause);
  };
  const handleRight = () => {
    // console.log("Right/next video");
  };
  return (
    <View style={styles.container}>
      <SingleTapComponent
        style={styles.tapContainer}
        setShowControls={setShowControls}
      >
        <Video
          ref={videoRef}
          // onLoad={handlePress}
          onPlaybackStatusUpdate={handlePlayback}
          positionMillis={skipTo}
          // onFullscreenUpdate={handleFullScreenUpdate}
          //   rate={1}
          style={styles.video}
          source={require("../test.mp4")}
          // useNativeControls
          resizeMode="contain"
          shouldPlay={playPause}
        />
      </SingleTapComponent>
      {showControls && (
        <View
          style={{
            flex: 1,
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        >
          <View
            style={{
              flex: 4,
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "red",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
                width: "100%",
                height: "100%",
              }}
            >
              <DoubleTapComponent
                style={styles.leftTap}
                setShowControls={setShowControls}
                showControls={showControls}
                name="left"
                setSkipTo={setSkipTo}
                playBackStatus={playBackStatus}
              >
                <Pressable
                  onPress={handleLeft}
                  style={{
                    height: 40,
                    width: 40,
                    // backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="stepbackward" size={30} color="white" />
                </Pressable>
              </DoubleTapComponent>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  onPress={handlePlayPause}
                  style={{
                    height: 40,
                    width: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {playPause ? (
                    <Ionicons name="pause" size={28} color="white" />
                  ) : (
                    <AntDesign name="caretright" size={30} color="white" />
                  )}
                </Pressable>
              </View>

              <DoubleTapComponent
                style={styles.rightTap}
                setShowControls={setShowControls}
                showControls={showControls}
                name="right"
                setSkipTo={setSkipTo}
                playBackStatus={playBackStatus}
              >
                <Pressable
                  onPress={handleRight}
                  style={{
                    height: 40,
                    width: 40,
                    // backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="stepforward" size={30} color="white" />
                </Pressable>
              </DoubleTapComponent>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <ProgressBar
              setSkipTo={setSkipTo}
              playBackStatus={playBackStatus}
              style={{
                width: `${playBackStatus.pendingPercentage}%`,
              }}
            />
          </View>
        </View>
      )}
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
