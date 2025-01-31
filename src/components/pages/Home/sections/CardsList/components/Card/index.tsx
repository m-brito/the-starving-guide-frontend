// External libraries
import React from 'react';

// Styles
import { StyledButton } from './styles';

interface ButtonImageProps {
  cardImage: string;
  altText: string;
  onClick?: () => void;
}

export const Card: React.FC<ButtonImageProps> = ({ cardImage, altText, onClick }) => {
  return <StyledButton $image={cardImage} onClick={onClick} aria-label={altText} />;
};
