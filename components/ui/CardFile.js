import { StyleSheet, View,Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const CardFile = ({children}) => {
  return (
    <View style={styles.card}>
{children}
    </View>
  )
}

const deviceWidth=Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        // justifyContent:"center",
        marginTop: deviceWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary700,
        // shadow for android
        elevation: 4,
        // shadow for IOS and android both
        // shadowOpacity,shadowoffset
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})

export default CardFile