import Header from './partical/Header';
import Footer from './partical/Footer';
import styled from 'styled-components';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -250px;
`;

const ListUserAdmin = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <h2>Trang chính</h2>
        <p>Xin chào! Đây là trang chính ứng dụng quản lý User.</p>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default ListUserAdmin;