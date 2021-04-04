import React from 'react'
import { Text } from 'react-native'
import AuthHeader from '../../../components/header/auth-header'
import { Container } from '../../../styles/style'

const Register: React.FC = ({ navigation }: any) => {
  return (
    <>
      <AuthHeader navigation={navigation} />
      <Container>
        <Text>Register</Text>
      </Container>
    </>
  )
}

export default Register
