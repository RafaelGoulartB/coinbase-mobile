import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const AuthContainer = styled.View`
  padding-top: ${Constants.statusBarHeight + 20}px;
  background-color: ${props => props.theme.colors.gray};
  elevation: 2;
  width: 100%;
`

export const BackButton = styled.Text`
  color: ${props => props.theme.colors.purple};
  font-weight: bold;
  font-size: 16px;
  padding-top: 16px;
  padding-bottom: 26px;
  padding-left: 16px;
`
