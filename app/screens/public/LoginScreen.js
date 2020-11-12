import React from 'react'
import {
  View, 
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native'

import { Login } from '../../api'
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

  const goUser = (token, username, password) => {
    dispatch({ type : 'setUser', user : {
        _id: null,
        username: username,
        password: password
      }
    })
    dispatch({ type : 'setToken', token : token})
  }

  const goForgot = () => {
    navigation.navigate('ForgotScreen')
  }

  const goRegistr = () => {
    navigation.navigate('RegisterScreen')
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
      Login(username, password)
        .then(response => {
          setDisabledBtn(false)
          // console.log("Success ========>", response);
          if (response.token) goUser(response.token, username, password)
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
            style={[styles.textButton, {paddingTop:15, paddingBottom:10, paddingLeft:30, paddingRight:30}]} 
            onPress={goForgot}
          >
            <Text style={styles.textBlue}>Забули пароль?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, (disabledBtn ? {opacity:0.6}:{opacity:1})]} 
            onPress={onPressLoginHandler}
            disabled={disabledBtn}
          >
            <Text style={styles.buttonLabel}>ВХIД</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.textButton, {paddingTop: 60, paddingBottom: 20}]} 
            onPress={goRegistr}
          >
            <Text style={styles.textGray}>Новий користувач? </Text><Text style={styles.textBlue}> Зареєструватися</Text>
          </TouchableOpacity>
            
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )

} 

export default Component