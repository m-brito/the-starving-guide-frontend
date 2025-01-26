// External Libraries
import React from 'react';

// Components
import { Card } from './components/Card';

// Styles
import { CardsGrid } from './styles';

export const CardsList: React.FC = () => {
  const cards = [
    { cardImage: '/cards/character_card.png', altText: 'Characters Card'},
    { cardImage: '/cards/mobs_card.png', altText: 'Mobs Card'},
    { cardImage: '/cards/foods_card.png', altText: 'Foods Card'},
    { cardImage: '/cards/biomes_card.png', altText: 'Biomes Card'},
    { cardImage: '/cards/seasons_card.png', altText: 'Seasons Card'},
    { cardImage: '/cards/items_card.png', altText: 'Items Card'},
  ];

  return (
    <CardsGrid>
      {cards.map((card, index) => (
        <Card key={index} cardImage={card.cardImage} altText={card.altText} />
      ))}
    </CardsGrid>
  );
};
