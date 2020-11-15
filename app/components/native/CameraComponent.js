import React from 'react'
import {
  View, 
  Text,
} from 'react-native'

import CheckPermission from './CheckPermission'

const Component = () => {
  const [cameraComp, setCameraComp] = React.useState(<Text>Camera need init</Text>)

  const checkCamera = async () => {
    let comp = await CheckPermission.getCamera(
      {height:200, width:200, backgroundColor:'red'}, "front"
    )
    setCameraComp( comp )
  }

  React.useEffect(() => {
    checkCamera()
  }, [])

  return (
    <View>
      { cameraComp }
    </View>
  )
}

export default Component