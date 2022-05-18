import React from 'react';
import { Container, Tab } from './Tabs.styles';

type TabType = { label: string, value: string };
type Props = {
  tabs:  TabType[],
  activeTab?: string;
  onChange: (value: string) => void;
}

function Tabs({ tabs, activeTab, onChange }: Props) {
  return (
    <Container>
      {tabs.map(({label, value}) => <Tab key={value} onClick={() => onChange(value)} isActive={value === activeTab}>{label}</Tab>) }
    </Container>
  );
}

export default Tabs;
