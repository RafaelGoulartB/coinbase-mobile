import React from 'react'
import { Image } from 'react-native'
import {
  SliderContainer,
  Title,
  Description,
  SliderButton,
  SliderButtonText
} from './styles'

interface SlideProps {
  imageSrc: any
  title: string
  description: string
  buttonLabel?: string
}

const Slide: React.FC<SlideProps> = ({
  imageSrc,
  title,
  description,
  buttonLabel
}: SlideProps) => {
  return (
    <SliderContainer>
      <Image source={imageSrc} />
      <Title>{title}</Title>
      <Description>{description}</Description>

      {buttonLabel && (
        <SliderButton onPress={() => {}}>
          <SliderButtonText>{buttonLabel}</SliderButtonText>
        </SliderButton>
      )}
    </SliderContainer>
  )
}

export default Slide
