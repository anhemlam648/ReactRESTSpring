
import styled from 'styled-components';
import HeaderUser from './partical/Headeruser';
import FooterUser from './partical/Footeruser';
import Home from './Home';
// import FormLogin from './FormLogin';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -250px;
`;

const Main = () => {
  return (
    <div>
      <HeaderUser />
      <ContentContainer>
        <Home />
      </ContentContainer>
      <FooterUser />
    </div>
  );
};

export default Main;
