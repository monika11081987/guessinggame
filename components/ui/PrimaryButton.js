import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
 
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressData) =>
          pressData.pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,

    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    // alignSelf:"center",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
