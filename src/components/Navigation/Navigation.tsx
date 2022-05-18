import React from 'react';
import { ReactComponent as ChevronLeft } from './icons/icn_chevron_left.svg';
import { ReactComponent as Settings } from './icons/icn_settings.svg';
import { Container, Label } from './Navigation.styles';

type Props = {
  label: string;
}

function Navigation({ label }: Props) {
  return (
    <Container>
      <ChevronLeft />
      <Label>{label}</Label>
      <Settings />
    </Container>
  );
}

export default Navigation;
