import Header from '../partical/Header';
import Footer from '../partical/Footer';
import styled from 'styled-components';
import ListUser from './ListUser';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -250px;
`;

const ListUserAdmin = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
          <ListUser/>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default ListUserAdmin;