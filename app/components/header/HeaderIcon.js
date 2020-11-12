import React from 'react'
import {
  TouchableOpacity,
} from 'react-native'

import {
  IconMiniMenu,
  IconMiniCallPlus,
  IconMiniEditPen,
  IconMiniSharing,
  IconMiniPlus,
} from '../index'

const Component = ({ icon, onPress }) => {
  let iconItem
  switch(icon) {
    case 'menu':           
      iconItem = <IconMiniMenu style={{width:20, height:14}} />
      break
    case 'call-plus':      
      iconItem = <IconMiniCallPlus style={{width:20, height:20}} />
      break
    case 'edit':           
      iconItem = <IconMiniEditPen style={{width:16, height:16}} />
      break
    case 'sharing':           
      iconItem = <IconMiniSharing style={{width:18, height:20}} />
      break
    case 'add':           
      iconItem = <IconMiniPlus style={{width:20, height:20}} />
      break
  }

  return (
    <TouchableOpacity 
      style={{width:60, alignItems: 'center', justifyContent: 'center'}} 
      onPress={onPress}
    >
      {iconItem}
    </TouchableOpacity>
  )
}

export default Component