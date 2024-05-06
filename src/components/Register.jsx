// import Header from './partical/Headeruser';
// import Footer from './partical/Footeruser';
import styled from 'styled-components';
import RegisterUser from './RegisterUser';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 580px;
  justify-content: center;
  align-items: center;
`;

const Register = () => {
  return (
    <div>
      <ContentContainer>
       <RegisterUser />
      </ContentContainer>
    </div>
  );
};
export default Register;
