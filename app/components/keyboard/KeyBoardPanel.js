import React from 'react'
import {
  View, 
  Text,
  TouchableOpacity,
} from 'react-native'

import {
  KeyBoardItem,
  IconCallGreenCircle,
  IconCallDelete,
} from '../'

const Component = ({callHandler}) => {
  const [number, setNumber] = React.useState("")

  const clickHandler = (lbl) => {
    let add = lbl
    if (number.slice(0,1)=="+") {
      if (number.length==3 || number.length==7 || number.length==11 || number.length==16) add = " "+lbl
    } else {
      if (number.length==2 || number.length==6 || number.length==10 || number.length==15) add = " "+lbl
    }
    setNumber(number + add)
  }

  const deleteHandler = () => {
    const last = ( number.slice(-1)==" " ) ? -2 : -1 
    setNumber( number.slice(0, last) )
  }

  const deleteAllHandler = () => {
    setNumber( "" )
  }

  return (
    <View>
      <View style={{ flexDirection:'row' }}>
        <Text 
          style={[
            { marginLeft:30, textAlign: 'center', height: 40, width:230 }, 
            (number.length<=17) ? {fontSize:26, paddingTop:0}:{fontSize:20, paddingTop:6}
          ]}
          numberOfLines={1}
        >{number}</Text>
        <TouchableOpacity
          style={[(number.length==0 ? {opacity:0}:{opacity:1})]} 
          onPress={deleteHandler}
          onLongPress={deleteAllHandler}
          disabled={number.length==0}
        >
          <IconCallDelete style={{width:37, height:26, marginTop:7}} />
        </TouchableOpacity>
      </View>
      
      <View style={{ flexDirection: 'row', marginLeft:24 }}>
        <KeyBoardItem label="1" clickHandler={clickHandler} />
        <KeyBoardItem label="2" clickHandler={clickHandler} />
        <KeyBoardItem label="3" clickHandler={clickHandler} />
      </View>
      <View style={{ flexDirection: 'row', marginLeft:24 }}>
        <KeyBoardItem label="4" clickHandler={clickHandler} />
        <KeyBoardItem label="5" clickHandler={clickHandler} />
        <KeyBoardItem label="6" clickHandler={clickHandler} />
      </View>
      <View style={{ flexDirection: 'row', marginLeft:24 }}>
        <KeyBoardItem label="7" clickHandler={clickHandler} />
        <KeyBoardItem label="8" clickHandler={clickHandler} />
        <KeyBoardItem label="9" clickHandler={clickHandler} />
      </View>
      <View style={{ flexDirection: 'row', marginLeft:24 }}>
        <KeyBoardItem label="*" clickHandler={clickHandler} />
        <KeyBoardItem label="0" subLabel="+" clickHandler={clickHandler} />
        <KeyBoardItem label="#" clickHandler={clickHandler} />
      </View>
      <View style={{ marginRight:25, alignItems:'center', justifyContent:'center' }}>
        <TouchableOpacity onPress={()=>callHandler(number)} >
          <IconCallGreenCircle style={{width:61, height:61, marginLeft:22, marginTop:6}} />
        </TouchableOpacity>
      </View>
      
      
    </View>
  )
}

export default Component