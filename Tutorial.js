import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const TutorialCss = StyleSheet.create({
  fullScreenContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  fullScreenContents: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreenContentsTop: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  textWhite: {
    color: "white",
  },
});

const WelcomeMessageOverlay = ({ next, stop, currentStepNumber }) => {
  console.log(`WelcomeMessageOverlay  ${currentStepNumber}`);

  return (
    <SafeAreaView style={TutorialCss.fullScreenContainer}>
      <View style={TutorialCss.fullScreenContents}>
        <View
          style={{ width: 30, height: 30, backgroundColor: "#ff0000" }}
        ></View>
        <Text
          style={{
            color: "#ffffff",
            padding: 10,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          This is the First message!
        </Text>
        <TouchableOpacity onPress={() => stop()} style={{ padding: 5 }}>
          <Text style={TutorialCss.textWhite}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => next()} style={{ padding: 5 }}>
          <Text style={TutorialCss.textWhite}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const SecondMessageOverlay = ({ previous, next, currentStepNumber }) => {
  console.log(`SecondMessageOverlay  ${currentStepNumber}`);

  return (
    <SafeAreaView style={TutorialCss.fullScreenContainer}>
      <View style={TutorialCss.fullScreenContents}>
        <View
          style={{ width: 30, height: 30, backgroundColor: "#ff0000" }}
        ></View>
        <Text
          style={{
            color: "#ffffff",
            padding: 10,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          This is the Second message!
        </Text>
        <TouchableOpacity onPress={() => previous()} style={{ padding: 5 }}>
          <Text style={TutorialCss.textWhite}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => next()} style={{ padding: 5 }}>
          <Text style={TutorialCss.textWhite}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ThirdMessageOverlay = ({
  previous,
  next,
  currentStepNumber,
  step: { mask },
}) => {
  console.log(`ThirdMessageOverlay  ${currentStepNumber}`);

  return (
    <SafeAreaView style={TutorialCss.fullScreenContainer}>
      <View style={TutorialCss.fullScreenContentsTop}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: "#ff0000",
            marginTop: mask.y + mask.height + 20,
          }}
        ></View>
        <Text
          style={{
            color: "#ffffff",
            padding: 10,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          This is the Third message!
        </Text>
        <Text
          style={{
            color: "#ffffff",
            padding: 10,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Its Calllout to the First Paragraph
        </Text>
        <TouchableOpacity onPress={() => previous()} style={{ padding: 5 }}>
          <Text style={TutorialCss.textWhite}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => next()} style={{ padding: 5 }}>
          <Text style={TutorialCss.textWhite}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const FourthMessageOverlay = ({
  previous,
  next,
  currentStepNumber,
  step: { mask },
}) => {
  console.log(`FourthMessageOverlay  ${currentStepNumber}`);

  return (
    <SafeAreaView style={TutorialCss.fullScreenContainer}>
      <View style={TutorialCss.fullScreenContentsTop}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: "#ff0000",
            marginTop: mask.y + mask.height + 20,
          }}
        ></View>
        <Text
          style={{
            color: "#ffffff",
            padding: 10,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          This is the Fourth message!
        </Text>
        <Text
          style={{
            color: "#ffffff",
            padding: 10,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Its Calllout to the Second Paragraph
        </Text>
        <TouchableOpacity onPress={() => previous()} style={{ padding: 5 }}>
          <Text style={TutorialCss.textWhite}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => next()} style={{ padding: 5 }}>
          <Text style={TutorialCss.textWhite}>Finish</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {
  WelcomeMessageOverlay,
  SecondMessageOverlay,
  ThirdMessageOverlay,
  FourthMessageOverlay,
};
