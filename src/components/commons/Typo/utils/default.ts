import { lightTheme } from '@globals/theme'
import { TypeVariants } from '../types'

export interface FontWeights {
  light: number
  regular: number
  medium: number
  bold: number
  extraBold: number
}

export const weights: FontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  extraBold: 900
}

export const variants: TypeVariants = {
  h1: {
    fontSize: ['2rem'],
    $lineHeight: ['120%'],
    color: [lightTheme.colors.text.primary],
    fontWeight: ['medium'],
    as: 'h1'
  },
  h2: {
    fontSize: ['3rem'],
    $lineHeight: ['120%'],
    color: [lightTheme.colors.text.primary],
    fontWeight: ['bold'],
    as: 'h2'
  },
  h3: {
    fontSize: ['2.5rem'],
    $lineHeight: ['100%'],
    color: [lightTheme.colors.text.primary],
    fontWeight: ['bold'],
    as: 'h3'
  },
  h4: {
    fontSize: ['2rem'],
    $lineHeight: ['120%'],
    color: [lightTheme.colors.text.primary],
    fontWeight: ['bold'],
    as: 'h4'
  },
  h5: {
    fontSize: ['1.5rem'],
    $lineHeight: ['120%'],
    color: [lightTheme.colors.text.primary],
    fontWeight: ['bold'],
    as: 'h5'
  },
  b1: {
    fontSize: ['0.875rem'],
    $lineHeight: ['120%'],
    color: [lightTheme.colors.text.primary],
    fontWeight: ['medium'],
    as: 'p'
  },
  b2: {
    fontSize: ['0.875rem'],
    $lineHeight: ['120%'],
    color: [lightTheme.colors.text.secondary],
    fontWeight: ['medium'],
    as: 'p'
  },
  b3: {
    fontSize: ['0.875rem'],
    $lineHeight: ['120%'],
    color: [lightTheme.colors.text.secondary],
    fontWeight: ['medium'],
    as: 'p'
  },
  caption: {
    fontSize: ['0.75rem'],
    $lineHeight: ['120%'],
    color: [lightTheme.colors.text.primary],
    fontWeight: ['regular'],
    as: 'p'
  }
}
