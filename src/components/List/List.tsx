import React from 'react';
import { useNavigate } from "react-router-dom";
import SalonItem from '../SalonItem';
import { StyledUl, StyledLi, EmptyMessage } from './List.styles';
import { Salon } from '../../types';

type Props = {
  items: Salon[];
}

function List({items}: Props) {
  const navigate = useNavigate();
  return (
  <StyledUl>
    {items.length ? items.map((s) => <StyledLi key={s.id} onClick={() => navigate(`salon/${s.id}`)}><SalonItem salon={s} /></StyledLi>) : <EmptyMessage>There is no items to show</EmptyMessage>}
  </StyledUl>
  );
}

export default List;
