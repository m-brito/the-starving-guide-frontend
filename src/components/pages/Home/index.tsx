// External Libraries
import React from 'react'

// Components
import { Presentation } from './sections/Presentation'
import { TextHome } from './sections/TextHome'

// Styles
import { Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Presentation />
      <TextHome />
    </Container>
  )
}
