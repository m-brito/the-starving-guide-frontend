// External Libraries
import React from 'react'

// Styles
import {
  Image,
  Title,
  Container,
  Description,
  TextContainer,
  ImageContainer
} from './styles'

export const TextHome = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={'./general/TextHomeImage.png'}
          alt="Boss de Don't Starve Together"
        />
      </ImageContainer>
      <TextContainer>
        <Title>GAME</Title>
        <Description>
          Don`t Starve Together é um jogo de sobrevivência cooperativo
          desafiador, ambientado em um mundo sombrio e misterioso repleto de
          criaturas estranhas, perigos inesperados e segredos ocultos. Criado
          pela Klei Entertainment, o jogo combina estratégia, exploração e um
          toque de humor macabro.
        </Description>
      </TextContainer>
    </Container>
  )
}
