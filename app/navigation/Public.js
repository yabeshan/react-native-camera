import React from 'react'
import { 
  NavigationContainer,
} from '@react-navigation/native'

import {
  ForgotScreen,
  LoginScreen,
  RegisterScreen,
} from '../screens'
import { 
  createStack, 
} from './Config'

const Stack = createStack([
    { name: 'LoginScreen', 
      component: LoginScreen, options: {headerShown: false} },
    { name: 'ForgotScreen', 
      component: ForgotScreen, options: {headerShown: false} },
    { name: 'RegisterScreen', 
      component: RegisterScreen, options: {headerShown: false} },
])

const Component = () => (
  <NavigationContainer>
    <Stack></Stack>
  </NavigationContainer>
)

export default Component
