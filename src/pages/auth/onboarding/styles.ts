import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export const SliderContainer = styled.View`
  background-color: #fffbf7;
  width: ${width}px;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-right: 48px;
  padding-left: 48px;
`
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  color: ${props => props.theme.colors.purple};
  text-align: center;
  margin-top: 36px;
  margin-bottom: 36px;
`
export const Description = styled.Text`
  font-size: 15px;
  line-height: 24px;
  color: ${props => props.theme.colors.black};
  text-align: center;
  margin-bottom: 36px;
`
export const SliderButton = styled.TouchableOpacity`
  padding: 16px 52px;
  border-radius: 5px;
  background: ${props => props.theme.colors.purple};
  text-align: center;
`
export const SliderButtonText = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`
