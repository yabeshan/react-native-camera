import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import styles from '../../styles'
import { useStore } from '../../store'

import {
  IconCallDelete,
  IconCallGreenCircle,
  IconCallGreyBg,
  IconCallCameraChange,
  IconCallMicrophoneOff,
  IconCallMicrophoneOn,
  IconCallRedCircle,
  IconCallForwarded,
  IconCallIncoming,
  IconCallInfo,
  IconCallMissed,
  IconCallVideo,

  IconMiniBackArrow,
  IconMiniCallPlus,
  IconMiniEditPen,
  IconMiniMenu,
  IconMiniPlus,
  IconMiniSharing, 
  IconMiniTextSms, 
  IconMiniVideoCam,

  IconLogoBG,
  IconLogoImage,
  IconMiniTab1,
  IconMiniTab2,
  IconMiniTab3,
  IconMiniTab4,
  IconMiniTab5,
} from '../index'

const Component = () => (
  <View style={{backgroundColor:'red'}}>
    
    <View style={{flexDirection:'row'}}>
      <IconCallDelete style={{width:40, height:40}} />
      <IconCallGreenCircle style={{width:40, height:40}} />
      <IconCallGreyBg style={{width:40, height:40}} />
      <IconCallForwarded style={{width:40, height:40}} />
      <IconCallIncoming style={{width:40, height:40}} />
      <IconCallMissed style={{width:40, height:40}} />
    </View>
    
    <View style={{flexDirection:'row'}}>
      <IconCallInfo style={{width:40, height:40}} />
      <IconCallVideo style={{width:40, height:40}} />
      <IconCallCameraChange style={{width:40, height:40}} />
      <IconCallMicrophoneOff style={{width:40, height:40}} />
      <IconCallMicrophoneOn style={{width:40, height:40}} />
      <IconCallRedCircle style={{width:40, height:40}} />  
    </View>
    
    <View style={{flexDirection:'row'}}>
      <IconMiniBackArrow style={{width:40, height:40}} />
      <IconMiniCallPlus style={{width:40, height:40}} />
      <IconMiniEditPen style={{width:40, height:40}} />
      <IconMiniMenu style={{width:40, height:40}} />
      <IconMiniPlus style={{width:40, height:40}} />
      <IconMiniSharing style={{width:40, height:40}} />
      <IconMiniTextSms style={{width:40, height:40}} />
      <IconMiniVideoCam style={{width:40, height:40}} />
    </View>
    
    <View style={{flexDirection:'row'}}>
      <IconMiniTab1 style={{width:40, height:40}} />
      <IconMiniTab2 style={{width:40, height:40}} />
      <IconMiniTab3 style={{width:40, height:40}} />
      <IconMiniTab4 style={{width:40, height:40}} />
      <IconMiniTab5 style={{width:40, height:40}} />
      <IconLogoBG style={{width:40, height:40}} />
      <IconLogoImage style={{width:40, height:40}} />
    </View>


  </View>
)

export default Component
