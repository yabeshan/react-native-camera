import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native'
// import { RNCamera } from 'react-native-camera'
// import {PERMISSIONS} from 'react-native-permissions';


// var Camera = (Platform.OS === 'android') 
//   ? require('react-native-file-picker') 
//   : require('react-native-document-picker');

import styles from '../../styles'
import { useStore } from '../../store'

import {
  AllIcons,
  HeaderContainer,
} from '../../components'

const Component = () => {
  const [, dispatch] = useStore()
  const [vers, setVers] = React.useState("start")

  React.useEffect(() => {
    if ( Platform 
      && Platform.constants
      && Platform.constants.reactNativeVersion
      && Platform.constants.reactNativeVersion.minor
    ) {
      setVers(Platform.constants.reactNativeVersion.minor)
    } else if (Platform.OS === "web") {
      setVers("web")
    } else {
      setVers("else")
    }
    // console.log("__PERMISSIONS__", PERMISSIONS)
  }, [])
  

  const handleSubmit = (values, actions) => {
    dispatch({ type : 'setLogout' })  
  }

  return (
    <SafeAreaView style={{ flex:1, height:'100%' }}>
      <HeaderContainer 
        leftIcon="menu" leftClick={()=>{console.log('menu left click')}}
        title="Обранi"
        rightIcon="edit" rightClick={()=>{console.log('menu right click')}}
      />
      <ScrollView style={{ flex:1 }}>
        <View style={styles.contentContainer}>
          <Text style={{marginTop: 15, marginBottom: 15}}></Text>
          <Text>Version RN {vers}</Text>
          {/* <AllIcons /> */}
          
          <TouchableOpacity 
            style={[styles.textButton, {paddingTop:15, paddingBottom:10, paddingLeft:30, paddingRight:30}]} 
            onPress={handleSubmit}
          >
            <Text style={styles.textBlue}>ВИХIД</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
} 

export default Component
