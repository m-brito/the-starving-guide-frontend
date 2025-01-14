import styled, { css } from 'styled-components'
import { normalizeEntry } from './utils/normalizeEntry'
import { normalizeWeight } from './utils/normalizeWeight'
import { mq } from '@services/facepaint'
import { FontWeights } from './utils/default'

type ContainerProps = {
  $align: 'center' | 'left' | 'right'
  fontSize: string | string[]
  $lineHeight: string | string[]
  $marginTop: string | string[]
  $marginLeft: string | string[]
  $marginRight: string | string[]
  $marginBottom: string | string[]
  fontWeight: keyof FontWeights | (keyof FontWeights)[]
  color: string | string[]

  $isLoading: boolean
  fontFamily: string
} & HTMLParagraphElement

const SKELETON_GRADIENT = 'linear-gradient(-45deg, #ECECEC, #FAFAFA)'

const skeleton = css<ContainerProps>`
  background: ${SKELETON_GRADIENT};
  border-radius: 5px;
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
  width: fit-content;
  color: transparent !important;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export const Container = styled.div<ContainerProps>`
  ${({
    $align,
    fontSize,
    $lineHeight,
    color,
    $marginTop,
    $marginBottom,
    $marginLeft,
    $marginRight,
    fontFamily,
    fontWeight
  }) =>
    mq({
      textAlign: normalizeEntry($align),
      fontSize: normalizeEntry(fontSize),
      lineHeight: normalizeEntry($lineHeight),
      color: normalizeEntry(color),
      marginTop: normalizeEntry($marginTop),
      marginBottom: normalizeEntry($marginBottom),
      marginLeft: normalizeEntry($marginLeft),
      marginRight: normalizeEntry($marginRight),
      fontFamily: normalizeEntry(fontFamily),
      fontWeight: normalizeWeight(fontWeight)
    })}

  ${({ $isLoading }) => ($isLoading ? skeleton : {})}
`
