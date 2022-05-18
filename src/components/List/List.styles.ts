import styled from 'styled-components';

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  padding: 20px 10px;
  border-bottom: 1px solid rgb(182 159 88 / 20%);
  cursor: pointer;
  background-color: #fff;
  transition: background-color 250ms ease-in-out;

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: rgb(182 159 88 / 10%);
  }
`;

export const EmptyMessage = styled.p`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;
