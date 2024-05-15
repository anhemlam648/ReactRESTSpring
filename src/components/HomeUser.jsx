
import styled from 'styled-components';
import Home from './Home';
import HeaderUser from './partical/Headeruser';
import FooterUser from './partical/Footeruser';

// import FormLogin from './FormLogin';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -200px;
`;

const HomeUser = () => {
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

export default HomeUser;
