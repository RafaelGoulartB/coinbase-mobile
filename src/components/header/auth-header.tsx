import React from 'react'
import { AuthContainer, BackButton } from './styles'

interface AuthHeaderProps {
  navigation: { navigate: any }
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ navigation }) => {
  return (
    <AuthContainer>
      <BackButton onPress={() => navigation.goBack()}>{'<'} Back</BackButton>
    </AuthContainer>
  )
}

export default AuthHeader
