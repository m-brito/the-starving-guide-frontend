// External Libraries
import React from 'react'

// Components
import { Typo } from '@components/Typo'

// Styles
import { Container, TextContainer } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <Typo
          variant="b2"
          fontSize={['1rem', '1rem', '1rem', '2rem', '3rem', '4rem']}
        >
          Welcome to the starving guide
        </Typo>
      </TextContainer>
    </Container>
  )
}
