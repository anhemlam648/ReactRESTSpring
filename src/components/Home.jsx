import styled from "styled-components";
const StyledDiv = styled.div`
  margin-top: 50px;
`;
const Home = () => {
  return (
    <StyledDiv>
      <h2>Chào mừng đến với trang chủ</h2>
      <p>Đây là trang chủ của ứng dụng quản lý task.</p>
      <p>Bạn có thể thêm nội dung và chức năng cho trang chủ ở đây.</p>
    </StyledDiv>
  );
};

export default Home;
