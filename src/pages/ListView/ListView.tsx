import React, { useState, useMemo, useEffect } from 'react';
import { List, Navigation, Filter } from '../../components';
import { useDataContext } from '../../context';

const MIN = 250;
const MAX = 500;

function ListView() {
  const { salon } = useDataContext();
  const [{min, max}, setRange] = useState({min: MIN, max: MAX });

  useEffect(() => {
    const minValue = localStorage.getItem('minValue') ?? min;
    const maxValue = localStorage.getItem('maxValue') ?? max;
    setRange({min: +minValue, max: +maxValue});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterChange = (min: string | number, max: string | number) => {
    setRange({min: +min, max: +max});
    localStorage.setItem('minValue', min.toString());
    localStorage.setItem('maxValue', max.toString());
  }

  const filteredList = useMemo(() => salon?.length ? salon.filter((s) => s.price >= min && s.price <= max) : [], [min, max]);
  return (
    <>
      <Navigation label='Hår' />
      <Filter
        label='Pris'
        unit='kr'
        min={min}
        max={max}
        onChange={(min, max) => handleFilterChange(min, max)}
      />
      <List items={filteredList} />
    </>
  );
}

export default ListView;
