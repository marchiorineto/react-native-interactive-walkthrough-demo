import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  WalkthroughProvider,
  useWalkthroughStep,
} from "react-native-interactive-walkthrough";

import {
  WelcomeMessageOverlay,
  SecondMessageOverlay,
  ThirdMessageOverlay,
  FourthMessageOverlay,
} from "./Tutorial";

export default function App() {
  return (
    <WalkthroughProvider>
      <SafeAreaProvider>
        <MyApp />
      </SafeAreaProvider>
    </WalkthroughProvider>
  );
}

const MyApp = () => {
  const walkthroughFirst = useWalkthroughStep({
    number: 1,
    OverlayComponent: WelcomeMessageOverlay,
    fullScreen: true,
    maskAllowInteraction: false,
  });

  const walkthroughSecond = useWalkthroughStep({
    number: 2,
    OverlayComponent: SecondMessageOverlay,
    fullScreen: true,
    maskAllowInteraction: false,
  });

  const walkthroughThird = useWalkthroughStep({
    number: 3,
    OverlayComponent: ThirdMessageOverlay,
    fullScreen: true,
    maskAllowInteraction: false,
  });

  const walkthroughFourth = useWalkthroughStep({
    number: 4,
    OverlayComponent: FourthMessageOverlay,
    fullScreen: true,
    maskAllowInteraction: false,
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
        React Native Interactive Walkthrough
      </Text>

      <Text onLayout={walkthroughThird.onLayout} style={{ padding: 10 }}>
        This is the first Paragraph
      </Text>
      <Text onLayout={walkthroughFourth.onLayout} style={{ padding: 10 }}>
        This is the second Paragraph
      </Text>
      <TouchableOpacity
        onPress={() => walkthroughFirst.start()}
        style={{ padding: 10, backgroundColor: "blue" }}
      >
        <Text style={{ color: "white" }}>Click Here To Start Tutorial</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
