import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import drygon from '../images/drygon_card.svg';

const DrygonCard = () => (
  <Card color="olive" raised centered>
    <Image src={drygon} size="large" />
  </Card>
);

export default DrygonCard;