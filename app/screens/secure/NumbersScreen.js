import React from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native'

import styles from '../../styles'
import { useStore } from '../../store'

import {
  KeyBoardPanel,
  ModalVideoCall,
} from '../../components'

const Component = ({ route, navigation }) => {
  const [number, setNumber] = React.useState("")
  const [visible, setVisible] = React.useState(false)

  const startCall = (callNumber) => {
    console.log("__start call__", callNumber)
    setNumber(callNumber)
    setVisible(true)
  }

  const closeHandler = () => {
    setVisible(false)
  }

  return (
    <SafeAreaView style={{ flex:1, height:'100%' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor:'#FFFFFF' }}>
        <KeyBoardPanel callHandler={startCall} />
        <ModalVideoCall number={number} visible={visible} close={closeHandler} />
      </View>
    </SafeAreaView>
  )
} 

export default Component
