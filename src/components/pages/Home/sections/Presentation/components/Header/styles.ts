import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 15vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 2rem;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-left: 0;
  border-right: 0;

  padding: 0.5rem 4rem;

  background: linear-gradient(90deg, #d9cba7 0%, #fbf9f4 51%, #d9cba7 100%);
`
