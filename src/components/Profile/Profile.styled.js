import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  min-height: 100vh;
  place-content: center;
`;
export const StyledWrapper = styled.div`
  width: ${props => props.theme.spacing(100)};
  border: 2px solid black;
  box-shadow: 0 0 4px 6px gray;
  overflow: hidden;
  background-color: #fff;
`;

export const StyledDesc = styled.div`
  padding: 30px;
  display: grid;
  place-content: center;
`;
export const StyledAvatar = styled.img`
  width: ${props => props.theme.spacing(30)};
  padding: 3px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 50%;
  border: 1px solid lightgrey;
`;
export const StyledUserName = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin: auto;
  margin-bottom: 10px;
`;
export const StyledUserTag = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: lightgray;
  margin: auto;
  margin-bottom: 10px;
`;
export const StyledUserLocation = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: lightgray;
  margin: auto;
  margin-bottom: 10px;
`;
export const StyledStats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
export const StyledStatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid grey;
  border-top: 2px solid grey;
  background-color: lightgray;
  padding: 5px;
`;
export const StyledSpan = styled.span`
  text-transform: capitalize;
  margin-bottom: 5px;
`;
export const StyledSpanLikes = styled.span`
  font-weight: bold;
`;
