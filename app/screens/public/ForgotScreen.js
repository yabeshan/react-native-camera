import React from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import styles from '../../styles'
import {
  IconLogoBG,
  IconLogoImage,
} from '../../components'

const Component = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex:1, height:'100%', backgroundColor:'#FFFFFF' }}>
      <ScrollView style={{ flex:1 }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          
          <View style={{position:'relative', width:130, height:130, margin:10}}>
            <View style={{position:'absolute', top:0, left:0}}>
              <IconLogoBG style={{width:130, height:130}} />
            </View>
            <View style={{position:'absolute', top:10, left:10}}>
              <IconLogoImage style={{width:110, height:110}} />
            </View>
          </View>

          <Text style={{fontWeight:'bold', marginBottom:30}}>Вітаємо!</Text>
          <Text style={{marginTop:100}}>Забули пароль?</Text>

          <TouchableOpacity 
            style={[styles.textButton, {paddingTop:15, paddingBottom:10, paddingLeft:30, paddingRight:30}]} 
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={styles.textBlue}>Увійти в акаунт</Text>
          </TouchableOpacity>

        </View>
        
      </ScrollView>
    </SafeAreaView>
  )

} 

export default Component
