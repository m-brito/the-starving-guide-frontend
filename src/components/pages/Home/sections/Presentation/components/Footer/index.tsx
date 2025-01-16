// External Libraries
import React from 'react'
import { useTheme } from 'styled-components'

// Components
import { Typo } from '@components/Typo'

// Styles
import { Container } from './styles'

export const Footer: React.FC = () => {
  const { colors } = useTheme()

  return (
    <Container>
      <Typo
        variant="b3"
        $letterSpacing={'0.2rem'}
        color={colors.text.primary}
        fontSize={['0.75rem', '0.80rem', '0.90rem', '1.3rem', '2rem', '2rem']}
        fontFamily={'"Rock Salt", serif'}
      >
        don’t starve together wiki
      </Typo>
      <Typo
        variant="caption"
        $marginTop={'0.2rem'}
        color={colors.text.primary}
        $lineHeight={['0.6rem', '0.6rem', '1rem', '1.3rem', '1.6rem', '2rem']}
        fontSize={['0.3rem', '0.3rem', '0.4rem', '0.5rem', '0.75rem', '1rem']}
        fontFamily={'"Rock Salt", serif'}
        $textTransform={'uppercase'}
      >
        explore tudo sobre o mundo de Don’t starve together e muito mais!
      </Typo>
    </Container>
  )
}
