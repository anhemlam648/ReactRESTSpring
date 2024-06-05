import Header from '../partical/Header';
import Footer from '../partical/Footer';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -250px;
`;

const HomePage = () => {
  const navigator = useNavigate();
function homeuser(){
  navigator("/");
}
  return (
    <div>
      <Header />
      <ContentContainer>
        <h2>Trang chính</h2>
        <p>Xin chào! Đây là trang chính admin của ứng dụng quản lý task.</p>
      </ContentContainer>
      <button onClick={homeuser}>Quay về trang HomeUser</button>
      <Footer />
    </div>
  );
};

export default HomePage;