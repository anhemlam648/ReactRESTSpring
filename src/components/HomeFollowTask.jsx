
import styled from 'styled-components';
import HeaderUser from './partical/Headeruser';
import FooterUser from './partical/Footeruser';
import Followtask from './Followtask';
// import FormLogin from './FormLogin';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -150px;
`;

const HomeFollowTask = () => {
  return (
    <div>
      <HeaderUser />
      <ContentContainer>
        <Followtask />
      </ContentContainer>
      <FooterUser />
    </div>
  );
};
export default HomeFollowTask;
