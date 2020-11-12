import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  IconTab
} from '../components'

const createStack = (screens) => {
  const Stack = createStackNavigator()

  const renderScreens = () => (
    screens.map(props => <Stack.Screen {...props} key="{{props.name}}"></Stack.Screen>)
  )

  return () => (
    <Stack.Navigator headerMode="screen">
      {renderScreens()}
    </Stack.Navigator>
  )
}

const tabBarOptions = () => {
  return {
    activeTintColor: '#5A76DE',
    inactiveTintColor: '#C1C7D0',
  }
}

const tabBarIconOptions = (icon) => {
  return {
    tabBarIcon: ({ color, size }) => (
      <IconTab 
        icon={icon}
        colorFill={color}
      />
    )
  }
}

export {
  createStack,
  tabBarOptions,
  tabBarIconOptions,
}
