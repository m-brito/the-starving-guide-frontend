import { DefaultTheme } from 'styled-components'

import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from './colors'

export const lightTheme: DefaultTheme = {
  colors: LIGHT_THEME_COLORS,
  logoPath: '/general/logo-black.svg'
}

export const darkTheme: DefaultTheme = {
  colors: DARK_THEME_COLORS,
  logoPath: '/general/logo-white.svg'
}
