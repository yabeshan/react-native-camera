import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import styles from '../../styles'
import { useStore } from '../../store'

const Component = () => {
  const [, dispatch] = useStore()

  const handleSubmit = (values, actions) => {
    dispatch({ type : 'setLogout' })  
  }

  return (
    <View style={styles.contentContainer}>
      <Text style={{marginTop: 150, marginBottom: 150}}>UserScreen</Text>
      
      <TouchableOpacity 
        style={[styles.textButton, {paddingTop:15, paddingBottom:10, paddingLeft:30, paddingRight:30}]} 
        onPress={handleSubmit}
      >
        <Text style={styles.textBlue}>ВИХIД</Text>
      </TouchableOpacity>
    </View>
  )
} 

export default Component
