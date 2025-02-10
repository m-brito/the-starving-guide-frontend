// External Libraries
import React from 'react';

// Components
import { Card } from './components/Card';

// Styles
import { CardsGrid } from './styles';

export const CardsList: React.FC = () => {
  const cards = [
    { cardImage: '/cards/character_card.png', altText: 'Characters Card', onClick: () => console.log('Clicked on Character Card') },
    { cardImage: '/cards/mobs_card.png', altText: 'Mobs Card', onClick: () => console.log('Clicked on Mob Card') },
    { cardImage: '/cards/foods_card.png', altText: 'Foods Card', onClick: () => console.log('Clicked on Food Card') },
    { cardImage: '/cards/biomes_card.png', altText: 'Biomes Card', onClick: () => console.log('Clicked on Biome Card') },
    { cardImage: '/cards/seasons_card.png', altText: 'Seasons Card', onClick: () => console.log('Clicked on Season Card') },
    { cardImage: '/cards/items_card.png', altText: 'Items Card', onClick: () => console.log('Clicked on Item Card') },
  ];

  const renderCards = () =>
    cards.map((card, index) => (
      <Card key={index} cardImage={card.cardImage} altText={card.altText} onClick={card.onClick} />
    ));
    
  return <CardsGrid>{renderCards()}</CardsGrid>;
};
