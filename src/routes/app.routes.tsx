import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../pages/app/Dashboard'
import Settings from '../pages/app/Settings'
import Chat from '../pages/app/Chat'
import History from '../pages/app/History'

const Tab = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        showLabel: false
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default AppRoutes
