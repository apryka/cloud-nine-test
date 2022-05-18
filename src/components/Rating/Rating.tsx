import React, { useCallback } from 'react';
import { ReactComponent as EmptyStar } from './icons/icn_star_empty.svg';
import { ReactComponent as EmptyStarSmall } from './icons/icn_star_empty_small.svg';
import { ReactComponent as FilledStar } from './icons/icn_star_filled.svg';
import { ReactComponent as FilledStarSmall } from './icons/icn_star_filled_small.svg';
import { Container } from './Rating.styles';

type Size = 'small' | 'normal';
type Props = {
  size?: Size;
  rate?: number;
  maxRate?: number;
}

function Rating({ rate = 0, size = 'normal', maxRate = 5 }: Props) {
  const Empty = useCallback(() => size === 'normal' ? <EmptyStar /> : <EmptyStarSmall />, [size]);
  const Filled = useCallback(() => size === 'normal' ? <FilledStar /> : <FilledStarSmall />, [size]);
  const arr = Array.from(Array(maxRate).keys());
  return (
    <Container>
      {arr.map((number) => number >= rate ? <Empty key={`empty-${number}`} /> : <Filled key={`filled-${number}`} />)}
    </Container>
  );
}

export default Rating;
