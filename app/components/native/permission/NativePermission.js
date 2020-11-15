import React from 'react'
import {
  View, 
  Text,
} from 'react-native'
// import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
// import { RNCamera } from 'react-native-camera'

const Component = () => {

  return (
    <View>
      <Text>Permissions = Native</Text>
    </View>
  )
}

Component.getCameraStatus = async () => {
  
  const platform = CheckPermission.getPlatform()
  return platform
  // const type = (platform.indexOf('ios')>0)
  //   ? PERMISSIONS.IOS.CAMERA
  //   : PERMISSIONS.ANDROID.CAMERA

    // return platform +"_____"+ type
  // check(type)
  // .then((result) => {
  //   return result
  // })
  // .catch((error) => {
  //   return "error"
  // })

}

Component.getCameraComp = async () => {
  // const status = await Component.getCameraStatus()
  // if ( status == "granted" ) {
  //   return (
  //     <RNCamera
  //       style={{height:100, width:100, backgroundColor:'red'}}
  //       type="front"
  //       ref={ref => {
  //         // this.camera = ref;
  //       }}
  //     />
  //   )
  // }

  return (
    <Text style={{color:'red', fontSize:30}}>Need Camera permissions</Text>
  )
}

export default Component