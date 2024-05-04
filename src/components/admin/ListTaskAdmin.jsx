import Header from '../partical/Header';
import Footer from '../partical/Footer';
import styled from 'styled-components';
import TaskList from './TaskList';

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

const ListTaskAdmin = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <TaskList />
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default ListTaskAdmin;
