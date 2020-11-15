import React from 'react'
import {
  View, 
  Text,
  Platform,
  Button,
} from 'react-native'

let PLATFORM = "init" // init | native-ios | native-android | native-web | expo-ios | expo-android | expo-web | undefined
let PERMISSION = <Text>Permissions need init</Text>
let CAMERA_STATUS = ["init", "init"]
let CAMERA_COMPONENT = <Text>Camera need init</Text>

const Component = () => {
  const [platform, setPlatform] = React.useState("init")
  const [permit, setPermit] = React.useState(<Text>Permission need init</Text>)
  const [cameraStatus, setCameraStatus] = React.useState(["init", "init"])
  const [cameraComp, setCameraComp] = React.useState(<Text>Camera need init</Text>)

  const initPermission = () => {
    Component.initPermission()
  }

  React.useEffect(() => {
    setPlatform(PLATFORM)
    setPermit(PERMISSION)
    setCameraStatus(CAMERA_STATUS)
    setCameraComp( CAMERA_COMPONENT )
  }, [])

  return (
    <View>
      <Text>Platform = {platform}</Text>
      { permit }
      <Text>Camera status = { JSON.stringify(cameraStatus[0]) } = { JSON.stringify(cameraStatus[1]) }</Text>
      <Button onPress={initPermission} title="Check camera" />
    </View>
  )
}

Component.initPlatform = () => {
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
}

Component.initPermission = async () => {
  let comp = null
  if (PLATFORM.indexOf("expo")==0) {
    comp = await require('./permission/ExpoPermission').default
  } else {
    comp = await require('./permission/NativePermission').default
  }
  PERMISSION = comp

  const status = await comp.getCameraStatus()
  CAMERA_STATUS = [status, Component.getFullStatus( status )]
  
  const el = await comp.getCameraComp()
  CAMERA_COMPONENT = el
}

Component.init = () => {
  Component.initPlatform()
  Component.initPermission()
}

Component.getPlatform = () => {
  return PLATFORM
}

Component.getCamera = async (style, type) => {
  const el = await PERMISSION.getCameraComp(style, type)
  return el
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
