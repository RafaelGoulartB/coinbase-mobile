import React from 'react'
import { Image } from 'react-native'
import {
  SliderContainer,
  SkipBox,
  SkipButtonText,
  Title,
  Description,
  SliderButton,
  SliderButtonText,
  SliderIndicatorBox,
  SliderIndicatorActive,
  SliderIndicatorInactive
} from './styles'

interface SlideProps {
  navigation: any
  id: number
  imageSrc: any
  title: string
  description: string
  buttonLabel?: string
}

const Slide: React.FC<SlideProps> = ({
  navigation,
  id,
  imageSrc,
  title,
  description,
  buttonLabel
}: SlideProps) => {
  return (
    <SliderContainer>
      {!buttonLabel && (
        <SkipBox>
          <SkipButtonText onPress={() => navigation.navigate('Register')}>
            Skip{'>>'}
          </SkipButtonText>
        </SkipBox>
      )}

      <Image source={imageSrc} />
      <Title>{title}</Title>
      <Description>{description}</Description>

      {buttonLabel && (
        <SliderButton onPress={() => navigation.navigate('Register')}>
          <SliderButtonText>{buttonLabel}</SliderButtonText>
        </SliderButton>
      )}

      <SliderIndicatorBox>
        {[0, 1, 2].map(item => {
          if (item !== id) {
            return <SliderIndicatorInactive key={item} />
          } else {
            return <SliderIndicatorActive key={item} />
          }
        })}
      </SliderIndicatorBox>
    </SliderContainer>
  )
}

export default Slide
