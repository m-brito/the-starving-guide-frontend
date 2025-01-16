import { mq } from '@services/facepaint'
import { normalizeEntry } from '@utils/normalize'
import styled from 'styled-components'

interface ImageProps {
  $marginTop?: string[] | string
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  width: 80%;
  max-height: 70vh;

  display: flex;
`

export const Image = styled.img<ImageProps>`
  max-height: 100%;

  ${({ $marginTop }) => mq({ marginTop: normalizeEntry($marginTop || '0') })};
`
