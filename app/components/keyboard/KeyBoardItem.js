import React from 'react'
import {
  View, 
  Text,
  TouchableOpacity,
} from 'react-native'

import {
  IconCallGreyBg
} from '../../components'

const Component = ({label, clickHandler, subLabel}) => {

  const sub = (subLabel)
    ? <Text style={{position:'absolute', top:34, textAlign:'center', width:'100%', fontSize:17 }}>{subLabel}</Text>
    : <Text></Text>
  return (
    <View style={{ padding:0, margin:10, alignItems:'center', justifyContent:'center' }}>
      <TouchableOpacity
        style={{   }}
        onPress={()=>{clickHandler(label)}}
        onLongPress={()=>{
          if (subLabel) clickHandler(subLabel)
          else clickHandler(label)
        }}
      >
        <IconCallGreyBg style={{width:62, height:61}} />
        <Text style={{position:'absolute', top:8, textAlign:'center', width:'100%', fontSize:27 }}>{label}</Text>
        {sub}
      </TouchableOpacity>
    </View>
  )
}

export default Component