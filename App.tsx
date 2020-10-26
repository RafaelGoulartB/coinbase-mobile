import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { StatusBar } from 'expo-status-bar'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Routes />
    </NavigationContainer>
  )
}

export default App
