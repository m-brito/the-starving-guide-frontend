// External Libraries
import React from 'react'

// Components
import { Presentation } from './sections/Presentation'
import { TextHome } from './sections/TextHome'
import { CardsList } from './sections/CardsList'

// Styles
import { Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Presentation />
      <TextHome />
      <CardsList />
    </Container>
  )
}
