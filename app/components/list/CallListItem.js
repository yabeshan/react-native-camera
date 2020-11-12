import React from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'

import {
  IconCallForwarded,
  IconCallIncoming,
  IconCallMissed,
  IconCallInfo,
  IconCallVideo,
} from '../'

const Component = ({ item }) => {
  
  let icon = (item.type=="missed") 
    ? <View style={{flexDirection:'row'}}>
        <IconCallMissed style={{width:18, height:18}} />
        <Text style={{paddingLeft:5, fontSize:12, color:'#E52020'}}>Missed</Text>
      </View>
    : (item.type=="forwarded")
    ? <View style={{flexDirection:'row'}}>
        <IconCallForwarded style={{width:18, height:18}} />
        <Text style={{paddingLeft:5, fontSize:12, color:'#AAAAAA'}}>Outgoing</Text>
      </View>
    : <View style={{flexDirection:'row'}}>
        <IconCallIncoming style={{width:18, height:18}} />
        <Text style={{paddingLeft:5, fontSize:12, color:'#AAAAAA'}}>Incoming</Text>
      </View>

  let type = (Math.random()*100<50)
    ? <IconCallInfo style={{width:24, height:24, margin:14}} />
    : <IconCallVideo style={{width:32, height:32, margin:10}} />

  const time = (Math.floor(Math.random()*14)+10)  + ':' + (Math.floor(Math.random()*50)+10)

  let urlImg = (Math.random()*100<50)
    ? <Image
        style={{width:48, height:48, marginRight:10, marginLeft:10}}
        source={require('../../assets/images/mini_user2.png')}
      />
    : <Image
        style={{width:48, height:48, marginRight:10, marginLeft:10}}
        source={require('../../assets/images/mini_user1.png')}
      />
      
  return (
    <View style={{height:60, backgroundColor:'#FFFFFF', borderBottom:'1px solid #DDDDDD', flexDirection:'row', padding:5}} >
      { urlImg }
      <View style={{flex:1, marginTop:3}}>
        <Text style={{fontWeight:'bold'}}>{item.title}</Text>
        { icon }
      </View>
      <Text style={{color:'#AAAAAA', marginTop:17, fontSize:13}}>{time}</Text>
      { type }
    </View>
  )
}

export default Component