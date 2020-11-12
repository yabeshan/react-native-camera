import React from 'react'
import {
  View,
} from 'react-native'

import {
  IconMiniTab1,
  IconMiniTab2,
  IconMiniTab3,
  IconMiniTab4,
  IconMiniTab5,
} from '../index'

const Component = ({ icon, colorFill }) => {
  let iconItem
  switch(icon) {
    case 'tab1':           
      iconItem = <IconMiniTab1 style={{width:24, height:24}} colorFill={colorFill} />
      break
    case 'tab2':      
      iconItem = <IconMiniTab2 style={{width:24, height:24}} colorFill={colorFill} />
      break
    case 'tab3':           
      iconItem = <IconMiniTab3 style={{width:24, height:24}} colorFill={colorFill} />
      break
    case 'tab4':           
      iconItem = <IconMiniTab4 style={{width:24, height:24}} colorFill={colorFill} />
      break
    case 'tab5':           
      iconItem = <IconMiniTab5 style={{width:24, height:24}} colorFill={colorFill} />
      break
  }

  return (
    <View>
      {iconItem}
    </View>
  )
}

export default Component