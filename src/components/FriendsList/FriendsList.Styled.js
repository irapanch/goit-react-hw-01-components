import { styled } from 'styled-components';

export const StyledWrapper = styled.ul`
  width: ${props => props.theme.spacing(100)};
  margin: auto;
  overflow: hidden;
  margin-bottom: 100px;
`;

export const StyledStatItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-top: 2px solid grey;
  box-shadow: -4px -4px 4px 2px gray;
  background-color: white;
  padding: 10px;
  font-size: 24px;
`;
export const StyledStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* background-color: green; */
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;
export const StyledAvatar = styled.img`
  padding: 3px;
  border-radius: 4px;
  border: 1px solid lightgray;
`;
