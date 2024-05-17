
import styled from 'styled-components';
import HeaderUser from './partical/Headeruser';
import FooterUser from './partical/Footeruser';
import ListUser from './ListUser';
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
        <ListUser />
      </ContentContainer>
      <FooterUser />
    </div>
  );
};

export default HomeUser;
