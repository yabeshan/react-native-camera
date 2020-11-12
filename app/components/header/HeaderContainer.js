import React from 'react'
import {
  View,
  Text,
} from 'react-native'

import {
  HeaderIcon,
  HeaderSwitcher,
} from '../'

const Component = ({ leftIcon, leftClick, rightIcon, rightClick, title, changeHandler }) => {
  
  const headerTitle = (title == "switcher-component")
    ? <HeaderSwitcher changeHandler={changeHandler} />
    : <Text style={{flex:1, textAlign:'center', paddingTop:28, fontWeight:'bold'}}>{title}</Text>
  
  return (
    <View style={{backgroundColor:'#E5EAFF', height:72, flexDirection:'row', borderBottom:'1px solid #C1C7D0'}}>
      <HeaderIcon icon={leftIcon} onPress={leftClick} />
      { headerTitle }
      <HeaderIcon icon={rightIcon} onPress={rightClick} />
    </View>
  )
}
      
export default Component