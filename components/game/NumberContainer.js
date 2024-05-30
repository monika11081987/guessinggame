import { StyleSheet, Text, View,Dimensions} from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth=Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    // padding: 24,
    // padding:deviceWidth/10,
    padding:deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize:deviceWidth < 380 ? 28 : 36,
    // fontWeight: "bold",
    // fontFamily:"open-sans-bold"
  },
});
export default NumberContainer;
