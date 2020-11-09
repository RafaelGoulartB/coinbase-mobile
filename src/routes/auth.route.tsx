import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from '../pages/onboarding/'

const Stack = createStackNavigator()

const AuthRoute: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboard" component={Onboarding} />
      <Stack.Screen name="Login" component={() => <View />} />
      <Stack.Screen name="Register" component={() => <View />} />
      <Stack.Screen name="ForgotPassword" component={() => <View />} />
    </Stack.Navigator>
  )
}

export default AuthRoute
