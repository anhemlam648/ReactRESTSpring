
import styled from 'styled-components';
import HeaderUser from './partical/Headeruser';
import FooterUser from './partical/Footeruser';
import TaskListUser from './TaskListUser';

// import FormLogin from './FormLogin';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -280px;
`;

const HomeTaskList = () => {
  return (
    <div>
      <HeaderUser />
      <ContentContainer>
        <TaskListUser />
      </ContentContainer>
      <FooterUser />
    </div>
  );
};

export default HomeTaskList;
