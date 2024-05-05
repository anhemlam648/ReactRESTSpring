import Header from '../partical/Header';
import Footer from '../partical/Footer';
import styled from 'styled-components';
import ListCategory from './ListCategory';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 180px;
`;

const ContentContainer = styled.div`
  flex: 1; 
  padding: 20px;
`;

const ListCategoryAdmin = () => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <ListCategory />
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
};

export default ListCategoryAdmin;
