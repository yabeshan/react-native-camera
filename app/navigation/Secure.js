
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { 
  createStack, 
  tabBarOptions,
  tabBarIconOptions,
} from './Config'
import {
  CallsListScreen,
  ContactsScreen,
  FavoritScreen,
  LinksListScreen,
  NumbersScreen,
  UserScreen,
} from '../screens'

const ClientTab1Stack = createStack([
  { name: 'FavoritScreen', 
    component: FavoritScreen, options: {headerShown: false} },
]) 

const ClientTab2Stack = createStack([
  { name: 'CallsListScreen', 
    component: CallsListScreen, options: {headerShown: false} },
]) 

const ClientTab3Stack = createStack([
  { name: 'NumbersScreen', 
    component: NumbersScreen, options: {headerShown: false} },
]) 

const ClientTab4Stack = createStack([
  { name: 'LinksListScreen', 
    component: LinksListScreen, options: {headerShown: false} },
]) 

const ClientTab5Stack = createStack([
  { name: 'ContactsScreen', 
    component: ContactsScreen, options: {headerShown: false} },
]) 

const ClientTabs = createBottomTabNavigator()
const ClientTabsStack = ({ navigation, route }) => (
  <ClientTabs.Navigator 
    // initialRouteName="Обранi"  
    // initialRouteName="Дзвiнки"
    initialRouteName="Набiр"
    tabBarOptions={tabBarOptions()}
  >
    <ClientTabs.Screen 
      name="Обранi" 
      options={tabBarIconOptions('tab1')}
      component={ClientTab1Stack} 
    />
    <ClientTabs.Screen 
      name="Дзвiнки" 
      options={tabBarIconOptions('tab2')}
      component={ClientTab2Stack} 
    />
    <ClientTabs.Screen 
      name="Набiр" 
      options={tabBarIconOptions('tab3')}
      component={ClientTab3Stack}
    />
    <ClientTabs.Screen 
      name="Екосистема" 
      options={tabBarIconOptions('tab4')}
      component={ClientTab4Stack}
    />
    <ClientTabs.Screen 
      name="Контакти" 
      options={tabBarIconOptions('tab5')}
      component={ClientTab5Stack}
    />
  </ClientTabs.Navigator>
)

const Component = () => (
  <NavigationContainer>
    <ClientTabsStack />
  </NavigationContainer>
)

export default Component