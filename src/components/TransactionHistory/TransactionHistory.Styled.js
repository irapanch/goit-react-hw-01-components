import { styled } from 'styled-components';

export const StyledTable = styled.table`
  box-shadow: 0px 6px 5px gray;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

export const StyledRow = styled.tr`
  background-color: blueviolet;
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  & > td {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const StyledTd = styled.td`
  padding: 10px 100px;
  border-collapse: collapse;
  text-align: center;
  font-size: 18px;
  text-transform: capitalize;
`;

export const StyledRows = styled.tr`
  background-color: ${props => (props.$idx % 2 !== 0 ? 'lightgrey' : 'white')};
`;
