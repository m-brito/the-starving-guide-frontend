import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsWildcards
    logoPath: string
  }

  export interface ColorsWildcards {
    background: string
    primary: string
    secondary: string
    text: {
      primary: string
      secondary: string
    }
    white: string
    black: string
    hover: string
    borders: {
      gray: string
    }
  }
}
