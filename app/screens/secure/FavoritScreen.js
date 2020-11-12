import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { RNCamera } from 'react-native-camera'

import styles from '../../styles'
import { useStore } from '../../store'

import {
  AllIcons,
  HeaderContainer,
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
          <Text style={{marginTop: 15, marginBottom: 15}}></Text>
          
          {/* <AllIcons /> */}
	  
          <RNCamera 
            ref={ref => {
              this.camera = ref;
            }}
            captureAudio={false}
            style={{flex: 1}}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }} />

          
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
