import React from 'react'
import {
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const Component = ({ changeHandler }) => {
  const [active, setActive] = React.useState(false)

  const clickHandler = (id) => {
    changeHandler(id==1)
    setActive(id==1)
  }

  return (
    <View style={{flex:1, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={[active ? styles.activeStyle : styles.passStyle, {borderBottomLeftRadius:10, borderTopLeftRadius:10}]}
        onPress={()=>{clickHandler(0)}}
        disabled={!active}
      >
        <Text 
          style={[active ? styles.activeFontStyle : styles.passFontStyle, {textAlign:'center', padding: 5, fontWeight:'bold'}]}
        >
          ВСI
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[!active ? styles.activeStyle : styles.passStyle, {borderBottomRightRadius:10, borderTopRightRadius:10}]}
        onPress={()=>{clickHandler(1)}}
        disabled={active}
      >
        <Text 
          style={[!active ? styles.activeFontStyle : styles.passFontStyle, {textAlign:'center', padding: 5, fontWeight:'bold'}]}
        >
          ПРОПУЩЕНI
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor:'#5A76DE', height:30, width:100
  },
  activeFontStyle: {
    color:'#FFFFFF'
  },
  passStyle: {
    backgroundColor:'#FFFFFF', height:30, width:100
  },
  passFontStyle: {
    color:'#5A76DE'
  },
});

export default Component