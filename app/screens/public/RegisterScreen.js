import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { Registration } from '../../api'
import styles from '../../styles'
import { useStore } from '../../store'
import {
  IconLogoBG,
  IconLogoImage,
} from '../../components'

const Component = ({ route, navigation }) => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [errname, setErrname] = React.useState("")
  const [errpass, setErrpass] = React.useState("")
  const [disabledBtn, setDisabledBtn] = React.useState(false)
  const [, dispatch] = useStore()

  const goUser = (id, username, password) => {
    dispatch({ type : 'setUser', user : {
        _id: null,
        username: username,
        password: password
      }
    })
    dispatch({ type : 'setToken', token : id})
  }

  const onPressLoginHandler = () => {
    if (username.length<4) {
      setErrname('Мінімум 4 символи')
    } else {
      setErrname('')
    }

    if (password.length<4) {
      setErrpass('Мінімум 4 символи')
    } else {
      setErrpass('')
    }
    
    if ( username.length>=4 && password.length>=4 ) {
      setDisabledBtn(true)
      Registration(username, password)
        .then(response => {
          setDisabledBtn(false)
          // console.log("Success ========>", response);
          if (response.id) goUser(response.id, username, password)
          else setErrpass( " "+ response )
        })
        .catch(error => {
          setDisabledBtn(false)
          // console.log("Error ========>", JSON.stringify(error) );
          setErrpass( "Error :: " + JSON.stringify(error) )
        })
    }
  }

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

          <TextInput 
            style={[styles.formTextInput, (errname.length==0) ? styles.borderGray : styles.borderRed ]}
            value={username}
            placeholder="Логiн"
            onChangeText={val => setUsername(val)}
          />
          <Text style={styles.errorText}>{errname}</Text>
        
          <TextInput 
            style={[styles.formTextInput, (errpass.length==0) ? styles.borderGray : styles.borderRed ]}
            secureTextEntry={true}
            value={password}
            placeholder="Пароль"
            onChangeText={val => setPassword(val)}
          />
          <Text style={styles.errorText}>{errpass}</Text>
        
          <TouchableOpacity 
            style={[styles.button, (disabledBtn ? {opacity:0.6}:{opacity:1})]} 
            onPress={onPressLoginHandler}
            disabled={disabledBtn}
          >
            <Text style={styles.buttonLabel}>Зареєструватися</Text>
          </TouchableOpacity>

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
