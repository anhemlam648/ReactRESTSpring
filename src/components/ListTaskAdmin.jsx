import Header from './partical/Header';
import Footer from './partical/Footer';
import styled from 'styled-components';
import TaskList from './TaskList';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -250px;
`;

const ListTaskAdmin = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <h2>Trang chính</h2>
        <p>Xin chào! Đây là trang chính ứng dụng quản lý task.</p>
        <TaskList />
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default ListTaskAdmin;