import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const InstructionText = ({children,addStyle}) => {
  return (
    <Text style={[styles.textInstruction,addStyle]}>{children}</Text>
  )
}


const styles = StyleSheet.create({
    textInstruction:{
      // fontFamily:'open-sans',
        color:Colors.accent500,
        fontSize:24
      },
})
export default InstructionText
