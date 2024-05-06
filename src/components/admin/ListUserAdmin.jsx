import Header from '../partical/Header';
import Footer from '../partical/Footer';
import styled from 'styled-components';
import ListUser from './ListUser';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 6000vh;
`;
const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-top: 80px;
`;
const ListUserAdmin = () => {
  return (
    <div>
      <Container>
      <Header />
      <ContentContainer>
          <ListUser/>
      </ContentContainer>
      <Footer />
      </Container>
    </div>
  );
};

export default ListUserAdmin;