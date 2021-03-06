import React from 'react'
import {
  View, 
  Text,
} from 'react-native'

/* NEED REMOVE FOR NATIVE BUILDER */
// import * as Permissions from 'expo-permissions'
// import { Camera } from 'expo-camera'

import CheckPermission from '../CheckPermission'

const Component = () => {
  return (
    <View>
      <Text>Permissions = Expo</Text>
    </View>
  )
}

Component.getCameraStatus = async () => {
  
  let obj = await Permissions.askAsync(Permissions.CAMERA)
  if ( obj.status == "granted" ) {
    return obj.status
  }

  try {
    obj = await Camera.requestPermissionsAsync()
    return obj.status
  } catch (err) {
    return "error"
  }
}

Component.getCameraComp = async ( style = {height:100, width:100, backgroundColor:'red'}, type = "front" ) => {
  const status = await Component.getCameraStatus()
  
  if ( status == "granted" ) {
    return (
      <Camera
        style={ style }
        type={ type }
        ref={(r) => {
          // camera = r
        }} />
    )
  }

  return (
    <Text style={{color:'red', fontSize:30}}>Need Camera permissions</Text>
  )
}

export default Component