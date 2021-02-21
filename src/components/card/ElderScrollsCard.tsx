import React from 'react';
import './ElderScrollsCard.scss';

import { ElderScrollCardInterface } from 'models/ElderScrollsModel';

//
// --- Types ---

export interface ElderScrollsCardProps {
  readonly card?: ElderScrollCardInterface;
}

export const ElderScrollsCard: React.FunctionComponent<ElderScrollsCardProps> = (props: ElderScrollsCardProps) => {
  const { card } = props;

  if (!card) {
    return null;
  }

  return (
    <div className="elder-scrolls-card" data-component="Card">
      <img src={card.imageUrl} alt={card.name} width='100%'/>
      <div className='card-meta'>
        <div><strong>Name:</strong> {card.name}</div>
        <div><strong>Type:</strong> {card.type}</div>
        <div><strong>Set Name:</strong> {card.set?.name}</div>
        <br />
        {card.text && <div>{card.text}</div>}
      </div>
    </div>
  );
};

export default ElderScrollsCard;
