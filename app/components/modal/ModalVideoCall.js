import React from 'react'
import {
  Dimensions,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native'

import {
  IconMiniBackArrow,
  IconCallCameraChange,
  IconCallMicrophoneOff,
  IconCallMicrophoneOn,
  IconCallRedCircle,
  Camera,
} from '../../components'

const Component = ({ number, visible, close }) => {
  const file1 = require('../../assets/images/call_user1.png')
  const file2 = require('../../assets/images/call_user2.png')
  const [iconBG, setIconBG] = React.useState(file1)
  const [iconFG, setIconFG] = React.useState(file2)
  const [audio, setAudio] = React.useState('off')

  let camera = null
  const [cameraType, setCameraType] = React.useState('front')
  const [cameraWidth, setCameraWidth] = React.useState(100)
  const [cameraHeight, setCameraHeight] = React.useState(100)
  const [flash, setFlash] = React.useState('off')

  React.useEffect(() => {
    const height = Math.floor(Dimensions.get('window').height)
    setCameraHeight(height)
    const width = Math.floor(Dimensions.get('window').width)
    setCameraWidth(width)
  }, [])

  const changeCamera = () => {
    setIconBG( iconBG == file1 ? file2 : file1 )
    setIconFG( iconFG == file1 ? file2 : file1 )

    let flag = (cameraType == 'back') ? 'front' : 'back'
    setCameraType( flag )
  }

  const changeMicrophone = () => {
    let flag = audio == 'off' ? 'on' : 'off'
    setAudio( flag )
  }

  const audioIcon = (audio == 'off')
    ? <IconCallMicrophoneOff style={{width:50, height:50, margin:13}} /> 
    : <IconCallMicrophoneOn style={{width:50, height:50, margin:13}} />

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={{width:'100%', height:'100%', backgroundColor:'#FFFFFF'}}>
        <View style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
          {/* <Image
            style={{width:'100%', height:'100%'}}
            source={iconBG}
          /> */}
          <Camera type={cameraType} style={{width:cameraWidth, height:cameraHeight}} />
        </View>
        <View style={{width:'100%', height:80, paddingTop:10, backgroundColor:'rgba(0, 0, 0, 0.7)', flexDirection:'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{width:60, height:70, alignItems: 'center', justifyContent: 'center' }}
            onPress={close}
          >
            <IconMiniBackArrow style={{width:20, height:8}} colorFill="#FFFFFF" />
          </TouchableOpacity>
          <Image
            style={{width:40, height:40, marginRight:20 }}
            source={require('../../assets/images/mini_user3.png')}
          />
          <Text style={{color:'#FFFFFF'}}>Call to {number}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <View></View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={changeCamera}
            >
              <Image
                style={{width:110, height:150, borderRadius:20, overflow: "hidden", borderWidth: 1, borderColor: '#FFFFFF', marginLeft:150, marginBottom:50}}
                source={iconFG}
              />
            </TouchableOpacity>
            
            <View style={{height:100, flexDirection:'row'}}>
              <TouchableOpacity
                onPress={changeMicrophone}
              >
                {audioIcon}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={close}
              >
                <IconCallRedCircle style={{width:76, height:76, marginLeft:20, marginRight:20}} />  
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={changeCamera}
              >
                <IconCallCameraChange style={{width:50, height:50, margin:13}} />
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </Modal>
    
  )
}

export default Component