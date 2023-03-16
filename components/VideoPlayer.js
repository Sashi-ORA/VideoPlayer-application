import { View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import React, { useContext, useEffect, useMemo, useState } from "react";
import DoubleTapComponent from "./TapComponent";
import SingleTapComponent from "./SingleTapComponent";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ScreenOrientation from "expo-screen-orientation";

import { useNavigation } from "@react-navigation/native";

import ProgressBar from "./ProgressBar";
import MyContext from "../context/VideoContext";

const VideoPlayerComponent = () => {
  const [showControls, setShowControls] = useState(true);
  const [playPause, setPlayPause] = useState(true);
  const [playBackStatus, setPlayBackStatus] = useState({
    totalMilli: 0,
    completedMillis: 0,
    pendingPercentage: 0,
  }); //for progress bar
  const [skipTo, setSkipTo] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const { videourl } = useContext(MyContext);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => setShowControls(false), 5000);
  }, []);
  useMemo(() => {
    if (showControls) {
      setTimeout(() => setShowControls(false), 5000);
    }
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

  const handleLeft = () => {
    console.log("left/prev video");
  };

  const handleBack = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
    navigation.goBack();
  };

  const handleFullScreen = async () => {
    setFullScreen(!fullScreen);
    fullScreen
      ? await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        )
      : await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
  };

  const handlePlayPause = () => {
    setSkipTo(playBackStatus.completedMillis);
    setPlayPause(!playPause);
  };
  const handleRight = () => {
    console.log("Right/next video");
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={fullScreen} />
      <DoubleTapComponent
        style={styles.tapContainer}
        setShowControls={setShowControls}
        showControls={showControls}
      >
        <Video
          // onLoad={handlePress}
          onPlaybackStatusUpdate={handlePlayback}
          positionMillis={skipTo}
          // onFullscreenUpdate={handleFullScreenUpdate}
          //   rate={1}
          style={styles.video}
          source={{ uri: videourl }}
          // useNativeControls
          resizeMode="cover"
          shouldPlay={playPause}
        />
      </DoubleTapComponent>
      <View
        style={{
          flex: 1,
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      >
        {showControls && (
          <Pressable
            onPress={handleBack}
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              // marginTop: 20,
            }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        )}
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
              // marginTop: 25,
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
              {showControls && (
                <Pressable
                  onPress={handleLeft}
                  style={{
                    height: 40,
                    width: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="stepbackward" size={30} color="white" />
                </Pressable>
              )}
            </DoubleTapComponent>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {showControls && (
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
              )}
            </View>

            <DoubleTapComponent
              style={styles.rightTap}
              setShowControls={setShowControls}
              showControls={showControls}
              name="right"
              setSkipTo={setSkipTo}
              playBackStatus={playBackStatus}
            >
              {showControls && (
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
              )}
            </DoubleTapComponent>
          </View>
        </View>
        {showControls && (
          <View style={fullScreen ? styles.fullScreen : styles.exitFullScreen}>
            <View style={{ flex: 9 }}>
              <ProgressBar
                setSkipTo={setSkipTo}
                playBackStatus={playBackStatus}
                style={{
                  width: `${playBackStatus.pendingPercentage}%`,
                }}
              />
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {fullScreen ? (
                <MaterialCommunityIcons
                  name="fullscreen-exit"
                  size={30}
                  color="white"
                  onPress={handleFullScreen}
                />
              ) : (
                <MaterialCommunityIcons
                  name="fullscreen"
                  size={30}
                  color="white"
                  onPress={handleFullScreen}
                />
              )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10%",
  },
  exitFullScreen: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: "0",
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
    width: "95%",
    aspectRatio: 16 / 9,
  },
});
export default VideoPlayerComponent;
