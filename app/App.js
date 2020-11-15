import 'react-native-gesture-handler'
import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import { StateProvider, initialState, reducer } from './store'
import Layouts from './navigation/Layouts'

import { CheckPermission } from './components'
CheckPermission.init()

const App = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <StatusBar barStyle="light-content" />
    <Layouts />
  </StateProvider>
)

export default App



