import React from 'react'
import {
  View, 
  Text,
} from 'react-native'

import CheckPermission from './CheckPermission'

const Component = ({style, type}) => {
  const [cameraComp, setCameraComp] = React.useState(<Text>Camera need init</Text>)
  const [cameraType, setCameraType] = React.useState('front')

  const checkCamera = async () => {
    let comp = await CheckPermission.getCamera( style, type )
    setCameraComp( comp )
    setCameraType( type )
  }
  if (type != cameraType) checkCamera()
  
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