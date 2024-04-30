
import styled from 'styled-components';
import HomeContact from './HomeContact';
import HeaderUser from './partical/Headeruser';
import FooterUser from './partical/Footeruser';

// import FormLogin from './FormLogin';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -280px;
`;

const Content = () => {
  return (
    <div>
      <HeaderUser />
      <ContentContainer>
        <HomeContact />
      </ContentContainer>
      <FooterUser />
    </div>
  );
};

export default Content;
