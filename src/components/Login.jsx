// import Header from './partical/Headeruser';
// import Footer from './partical/Footeruser';
import styled from 'styled-components';
import LoginUser from './LoginUser';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: 50px;
  margin-left: 550px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Login = () => {
  return (
    <div>
      <ContentContainer>
       <LoginUser />
      </ContentContainer>
    </div>
  );
};
export default Login;
