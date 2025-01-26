// External libraries
import styled from 'styled-components';

export const StyledButton = styled.button<{ $image: string }>`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  width: 120px;
  height: 120px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
