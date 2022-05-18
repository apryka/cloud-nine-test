import React from 'react';
import Rating from '../Rating';
import { ReactComponent as ChevronRight } from './icons/icn_chevron_right_small.svg';
import { Container, Name, SecondaryText, TertiaryText, StyledSmall, Row } from './SalonItem.styles';
import { Salon } from '../../types';

type Props = {
  salon: Salon;
}

const formatTime = (time: number) => `${time}:00`;

function SalonItem({ salon }: Props) {
  const { name, price, address, rating, number_of_reviews, time, free_slot } = salon;
  return (
    <Container>
      <div style={{ gridArea: '1 / 1 / 4 / 2' }}>
        <SecondaryText>{formatTime(free_slot)}</SecondaryText>
      </div>
      <div style={{ gridArea: '1 / 2 / 2 / 3' }}>
        <Name>{name}</Name>
      </div>
      <div style={{ gridArea: '2 / 2 / 3 / 3', alignSelf: 'center' }}>
        <Row>
        <Rating rate={rating} size='small' />
        <StyledSmall>({number_of_reviews})</StyledSmall>
        </Row>
      </div>
      <div style={{ gridArea: '3 / 2 / 4 / 3' }}>
        <TertiaryText>{address}</TertiaryText>
      </div>
      <div style={{ gridArea: '1 / 3 / 2 / 4' }}>
        <SecondaryText>{price} kr</SecondaryText>
      </div>
      <div style={{ gridArea: '2 / 3 / 3 / 4' }}>
        <TertiaryText>{time}</TertiaryText>
      </div>
      <div style={{ gridArea: '1 / 4 / 4 / 5', alignSelf: 'center' }}>
        <ChevronRight />
      </div>
    </Container>
  );
}

export default SalonItem;
