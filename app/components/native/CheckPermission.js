import React from 'react'
import {
  View, 
  Text,
  Platform,
  Button,
} from 'react-native'
import ExpoPermission from './permission/ExpoPermission'

let PLATFORM = "init" 
// init | native-ios | native-android | native-web | expo-ios | expo-android | expo-web | undefined

const Component = () => {
  const [platform, setPlatform] = React.useState("init")
  const [permit, setPermit] = React.useState(<View><Text>Permission init</Text></View>)
  const [cameraStatus, setCameraStatus] = React.useState(["init", "init"])
  const [cameraComp, setCameraComp] = React.useState(<Text>Camera need init</Text>)

  const initPlatform = () => {
    if ( Platform 
      && Platform.constants
      && Platform.constants.reactNativeVersion
      && Platform.constants.reactNativeVersion.minor
    ) {
      if (Platform.OS === 'ios') 
        PLATFORM = (Platform.constants.reactNativeVersion.minor == 62) ? "native-ios" : "expo-ios"
      else if (Platform.OS === 'android') 
        PLATFORM = (Platform.constants.reactNativeVersion.minor == 62) ? "native-android" : "expo-android"
      else PLATFORM = "native-web"
    } else if (Platform.OS === "web") {
      PLATFORM = "expo-web"
    } else {
      PLATFORM = "undefined"
    }
    setPlatform( PLATFORM )
  }

  const checkCamera = async ( comp ) => {
    const status = await comp.getCameraStatus()
    setCameraStatus([status, Component.getFullStatus( status )])
    
    // setCameraStatus(["444", "444"])
    // const el = await comp.getCameraComp()
    // setCameraStatus(["555", "555"])
    // setCameraComp( el )
    // setCameraStatus(["666", "666"])
  }

  const checkPermission = async () => {
    let comp = null
    if (PLATFORM.indexOf("expo")==0) {
      comp = await require('./permission/ExpoPermission').default
    } else {
      comp = await require('./permission/NativePermission').default
    }
    setPermit( comp )
    checkCamera( comp )
  }
  
  React.useEffect(() => {
    initPlatform()
    checkPermission()
  }, [])

  return (
    <View>
      <Text>Platform = {platform}</Text>
      { permit }
      <Text>Camera status = { JSON.stringify(cameraStatus[0]) } = { JSON.stringify(cameraStatus[1]) }</Text>
      { cameraComp }
      {/* <Button onPress={checkPermission} title="Check camera" /> */}
    </View>
  )
}

Component.getPlatform = () => {
  return PLATFORM
}

Component.getFullStatus = (status) => {
  if ( status == "granted" ) {
    return 'The permission is granted'
  }

  if ( status == "denied" ) {
    return 'The permission has not been requested / is denied but requestable'
  }

  if ( status == "unavailable" ) {
    return 'This feature is not available (on this device / in this context)'
  }
  
  return 'The permission is denied and not requestable anymore'
}

export default Component

// import {PERMISSIONS} from 'react-native-permissions'
// import { RNCamera } from 'react-native-camera'
// import { Camera } from 'expo-camera'


// if (Platform.OS=="web") {
// import { RNCamera } from 'react-native-camera'
  // const RNCamera = "123"
// } else {
  // import { RNCamera } from 'react-native-camera'
// }

// var Camera = (Platform.OS === 'android') 
//   ? require('react-native-file-picker') 
//   : require('react-native-document-picker');


// console.log("__platform__", Platform.constants.reactNativeVersion )// minor // patch
// console.log("__window__", window.document.URL ) // localhost
// console.log("__window__", window.document ) // undefined

/*

const [vers, setVers] = React.useState("start")

  React.useEffect(() => {
    if ( Platform 
      && Platform.constants
      && Platform.constants.reactNativeVersion
      && Platform.constants.reactNativeVersion.minor
    ) {
      setVers(Platform.constants.reactNativeVersion.minor)
    } else if (Platform.OS === "web") {
      setVers("web")
    } else {
      setVers("else")
    }
    // console.log("__PERMISSIONS__", PERMISSIONS)
  }, [])
  
*/