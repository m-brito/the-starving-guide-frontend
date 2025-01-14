// External Libraries
import React from 'react'

// Utils
import { variants } from './utils/default'

// Types
import { Props } from './types'

// Styles
import { Container } from './styles'

export const Typo: React.FC<Props> = ({
  children,
  variant,
  isLoading,
  ...customConfig
}) => {
  // Constants
  const config = { ...variants[variant], ...customConfig }

  return (
    <Container $isLoading={isLoading} {...config}>
      {children}
    </Container>
  )
}
