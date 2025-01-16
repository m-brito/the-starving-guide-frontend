// External Libraries
import React from 'react'

// Components
import { Header } from './components/Header'
import { Footer } from './components/Footer'

// Styles
import { Container, Content, Image } from './styles'

export const Presentation: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Image
          width={'27%'}
          $marginTop={['10%', '10%', '5%']}
          src={'/general/start_monsters_shadows.png'}
          alt="Imagem que mostra monstros das sombras do jogo Dont Starve Together virados para o lado direito"
        />
        <Image
          width={'46%'}
          src={'/logo.png'}
          alt="Logo da pagina onde mostra um personagem inspirado no Wilson de Dont Starve Together com uma faixa escrito o nome da wiki 'The Starving Guide'"
        />
        <Image
          width={'27%'}
          $marginTop={['10%', '10%', '5%']}
          src={'/general/end_monsters_shadows.png'}
          alt="Imagem que mostra monstros das sombras do jogo Dont Starve Together virados para o lado esquerdo"
        />
      </Content>
      <Footer />
    </Container>
  )
}
