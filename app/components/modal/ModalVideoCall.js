import React from 'react'
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native'

import {
  IconMiniBackArrow,
} from '../../components'

const Component = ({ number, visible, close }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={{width:'100%', height:'100%', backgroundColor:'#FFFFFF'}}>
        <View style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
          <Image
            style={{width:'100%', height:'100%'}}
            source={require('../../assets/images/call_user1.png')}
          />
        </View>
        <View style={{width:'100%', height:70, backgroundColor:'rgba(0, 0, 0, 0.7)', flexDirection:'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{width:50, height:70, alignItems: 'center', justifyContent: 'center' }}
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
        <View>
          
        </View>
      </View>
    </Modal>
    
  )
}

export default Component