import styled from "styled-components";
import Err from './404';
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ece9e6, #ffffff);
`;

const Error = () => {
  return (
    <StyledDiv>
        <Err />
    </StyledDiv>
  );
};

export default Error;
