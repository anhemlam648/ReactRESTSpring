import Header from '../partical/Header';
import Footer from '../partical/Footer';
import styled from 'styled-components';
import ListCategory from './ListCategory';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -250px;
`;

const ListCategoryAdmin = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <ListCategory />
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default ListCategoryAdmin ;