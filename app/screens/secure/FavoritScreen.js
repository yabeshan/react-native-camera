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

  let camera = null
  const [cameraType, setCameraType] = React.useState(RNCamera.Constants.Type.front)
  const [flash, setFlash] = React.useState('off')
  const recordOptions = {
      mute: false,
      maxDuration: 5,
      quality: RNCamera.Constants.VideoQuality['288p'],
  }

  const takePicture = () => {
    if (camera) {
//      camera.takePictureAsync()
       let flag = (cameraType == RNCamera.Constants.Type.back) ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back
       setCameraType( flag )
    }
  };

  const takeVideo = () => {
    if (camera) {
//        camera.recordAsync(recordOptions)
	let flag = (flash == 'off') ? 'on' : 'off'
	setFlash( flag )
    }
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
              camera = ref;
            }}
            captureAudio={true}
            style={{width:200, height:200, backgroundColor:"#660000"}}
            type={cameraType}
            flashMode={flash}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }} />

          <TouchableOpacity 
            style={[styles.textButton, {paddingTop:15, paddingBottom:10, paddingLeft:30, paddingRight:30}]} 
            onPress={takePicture}
          >
            <Text style={styles.textBlue}>back front</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.textButton, {paddingTop:15, paddingBottom:10, paddingLeft:30, paddingRight:30}]} 
            onPress={takeVideo}
          >
            <Text style={styles.textBlue}>flash</Text>
          </TouchableOpacity>
          
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
