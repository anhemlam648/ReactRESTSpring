import Header from './partical/Headeruser';
import Footer from './partical/Footeruser';
import styled from 'styled-components';
// import TaskList from './TaskList';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -280px;
`;

const HomeUser = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <h2>Quản lý task client</h2>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default HomeUser;