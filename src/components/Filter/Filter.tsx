import React, { useState } from 'react';
import { ReactComponent as ChevronDown } from './icons/icn_chevron_right_down.svg';
import { Label, Container, Row, StyledInput, InputContainer } from './Filter.styles';

type Props = {
  min: number | string;
  max: number | string;
  label: string;
  unit: string;
  onChange: (min: number | string, max: number | string) => void;
}

function Filter({ min = 0, max = 0, label, unit, onChange }: Props) {
  const [isOpen, setOpen] = useState(false);
  const handleChange = (min: number | string, max: number | string) => onChange(min, max);
  return (
    <Container>
      <Row onClick={() => setOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        <Label>{label} {min} - {max} {unit}</Label>
        <ChevronDown />
      </Row>
      {isOpen && <InputContainer>
        <label>min{' '}
          <StyledInput type='number' placeholder="min" value={min} onChange={e => handleChange(e.target.value, max)} />
        </label>
        <label>max{' '}
        <StyledInput type='number' placeholder="max" value={max} onChange={e => handleChange(min, e.target.value)}/>
        </label>
        </InputContainer>}
    </Container>
  );
}

export default Filter;
