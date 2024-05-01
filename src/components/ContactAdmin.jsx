import Header from './partical/Header';
import Footer from './partical/Footer';
import styled from 'styled-components';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -250px;
`;

const ContactAdmin = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <h2>Trang chính</h2>
        <p>Xin chào! Đây là trang liên hệ ứng dụng.</p>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default ContactAdmin ;