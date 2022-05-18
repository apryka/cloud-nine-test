import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 5px 15px;
  grid-template-columns: auto 1fr auto min-content;
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
`;

export const Name = styled.div`
  font-family: MillerBanner, Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

export const StyledSmall = styled.small`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
`;

export const SecondaryText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
`;

export const TertiaryText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: gray;
`;

export const Row = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
