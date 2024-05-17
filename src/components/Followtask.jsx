import styled from "styled-components";
import HeaderUser from "./partical/Headeruser";
import FooterUser from "./partical/Footeruser";
const StyledDiv = styled.div`
  margin-top: -180px;
  margin-left: 50px;
`;
const Home = () => {
  return (
    <div>
    <HeaderUser />
    <StyledDiv>
      <h2>Chào mừng đến với trang theo dõi Task</h2>
      <p>Đây là trang theo dõi task.</p>
    </StyledDiv>
    <FooterUser />
    </div>
  );
};

export default Home;
