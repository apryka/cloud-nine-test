import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Tab = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  place-content: center;
  padding: 15px;
  flex: 1;
  border-bottom: 1px solid ${({ isActive }) => isActive ? 'rgb(182 159 88)' : 'rgb(255 255 255)'};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;
