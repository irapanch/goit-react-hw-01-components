import { styled } from 'styled-components';

export const StyledWrapper = styled.ul`
  width: ${props => props.theme.spacing(100)};
  margin: auto;
  overflow: hidden;
  border: 2px solid grey;
  margin-bottom: 100px;
`;
export const StyledTitle = styled.h2`
  padding: 20px 10px;
  text-align: center;
  background-color: white;
`;
export const StyledList = styled.ul`
  display: flex;
  border: 2px solid grey;
  background-color: white;
`;
export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  border-top: 2px solid black;
  box-shadow: 0 0 2px 2px gray;
  background-color: white;
  padding: 10px;
  font-size: 16px;
  background-color: ${props => props.$bg};
`;
export const StyledLabel = styled.span``;
export const StyledPercentage = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
