import Header from './partical/Headeruser';
import Footer from './partical/Footeruser';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import TaskList from './TaskList';
import Home from './Home';
import Login from './Login';
// import FormLogin from './FormLogin';
const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -280px;
`;

const HomeUser = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login  />} />
        <Route path='/tasks' element={<TaskList />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default HomeUser;
