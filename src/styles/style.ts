import Constants from 'expo-constants'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`
export const ScrollContainer = styled.ScrollView`
  flex: 1;
  height: 100%;
  padding-top: ${Constants.statusBarHeight + 20}px;
`
