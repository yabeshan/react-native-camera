import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native'

import styles from '../../styles'
import { useStore } from '../../store'

import {
  AllIcons,
  HeaderContainer,
  Camera,
  CheckPermission,
} from '../../components'

const Component = () => {
  const [, dispatch] = useStore()

  const handleSubmit = (values, actions) => {
    dispatch({ type : 'setLogout' })  
  }

  return (
    <SafeAreaView style={{ flex:1, height:'100%' }}>
      <HeaderContainer 
        leftIcon="menu" leftClick={()=>{console.log('menu left click')}}
        title="Обранi"
        rightIcon="edit" rightClick={()=>{console.log('menu right click')}}
      />
      <ScrollView style={{ flex:1 }}>
        <View style={styles.contentContainer}>
          {/* <Text style={{marginTop: 15, marginBottom: 15}}></Text> */}
          
          <Camera style={{height:200, width:200, backgroundColor:'red'}} type="front" />
          <CheckPermission />
          

          {/* <AllIcons /> */}
          
          <TouchableOpacity 
            style={[styles.textButton, {paddingTop:15, paddingBottom:10, paddingLeft:30, paddingRight:30}]} 
            onPress={handleSubmit}
          >
            <Text style={styles.textBlue}>ВИХIД</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
} 

export default Component
