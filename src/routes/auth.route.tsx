import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from '../pages/auth/onboarding'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import ForgotPassword from '../pages/auth/forgot-password'

const Stack = createStackNavigator()

const AuthRoute: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Onboard" headerMode="none">
      <Stack.Screen name="Onboard" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default AuthRoute
