import { StyleSheet, Text, Platform } from 'react-native'
import React from 'react'
// import Colors from '../../constants/colors'

const Title = ({children}) => {
  return (
     <Text style={styles.title}>{children}</Text>
      )
}

const styles = StyleSheet.create({
    title: {
      // fontFamily:'open-sans-bold',
        fontSize: 40,
        // fontWeight: "bold",
        color: 'white',
        textAlign: "center",
        // borderWidth:Platform.OS === 'android' ? 2 : 0,
        borderWidth:Platform.select({ios:0 ,android:2}),
        borderColor:'white',
        padding:12,
      },
})

export default Title