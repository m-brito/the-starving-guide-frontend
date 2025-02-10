import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #ded0b1;
  padding: 1.25rem;
  border-radius: 0.65rem;
  max-width: 43.75rem;
`

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 40%;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 0.625rem;
`

export const TextContainer = styled.div`
  flex: 2;
  padding: 1.25rem;
`

export const Title = styled.h2`
  font-family: 'Amatic SC', sans-serif;
  font-size: 3rem;
  font-weight: bold;
`

export const Description = styled.p`
  font-family: 'Amatic SC', sans-serif;
  font-size: 1.5rem;
  text-align: justify;
  color: #333;
  font-weight: bold;
`
