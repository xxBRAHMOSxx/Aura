import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot,Stack } from 'expo-router'


const _layout = () => {
  return (
    <Slot/>
  )
}

export default _layout

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})