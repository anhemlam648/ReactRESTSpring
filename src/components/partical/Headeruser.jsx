import { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const HeaderContainer = styled.div`
  background-color: #CCCCFF;
  color: #fff;
  padding: 10px;
  text-align: left;
  font-size: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const NavContainer = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 15px;
    display: flex;
    justify-content: center;
  }

  li {
    margin-right: 20px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  input {
    padding: 5px;
    border-radius: 10px;
    font-size: 14px;
    Background-color: #F8F8FF
  }

  button {
    padding: 5px;
    font-size: 14px;
    margin-left: 5px;
    cursor: pointer;
    Background-color: #F8F8FF
  }
`;

const HeaderUser = () => {
  const [taskName, setTaskName] = useState('');
  const userName = sessionStorage.getItem('userName');
  const navigator = useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem('userName');
  };
  const handleSearchTask = (e) => {
    setTaskName(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      try {
        const response = await axios.get(`http://localhost:8080/tasks/search`, {
          params: {
            taskName: taskName
          }
        });
        if (response.data && response.data.length > 0) {
          navigator('/searchtask', { state: { tasks: response.data } });
        } else {
          alert('Task không tìm thấy');
        }
      } catch (error) {
        console.error('lỗi tìm kiếm Task:', error);
        alert('lỗi tìm kiếm Task');
        navigator('/task')
      }
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };
  return (
    <HeaderContainer>
      <h1>Ứng dụng quản lý task</h1>
      {userName ? (
        <>
          <div style={{ marginLeft: '1350px', marginTop: '-40px', fontSize: '15px' }}>
            <span>Xin chào, {userName}</span>
            <div>
              <Link to='/' onClick={handleLogout}>Đăng xuất</Link>
            </div>
          </div>
        </>
      ) : (
        <li style={{ marginLeft: '1400px', marginTop: '-40px', fontSize: '15px' }}>
          <Link to='/login'>Đăng Nhập</Link>
        </li>
      )}
      <NavContainer>
        <ul>
          <li>
            <Link to='/'>Trang chủ</Link>
          </li>
          <li>
            <Link to='/task'>Trang Task</Link>
          </li>
          <li>
            <Link to='/detailtask'>Trang Theo Dõi Task</Link>
          </li>
          <li>
            <Link to='/listuser'>Trang Danh Sách User</Link>
          </li>
          <li>
            <Link to='/contact'>Trang Liên Hệ</Link>
          </li>
        </ul>
      </NavContainer>
      <SearchContainer>
        <input
          // type="text" placeholder="Tìm Kiếm..." value={taskName} onChange={(e) => setTaskName(e.target.value)}
           type="text" placeholder="Tìm Kiếm..." value={taskName} onChange={handleSearchTask} onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Tìm Kiếm</button>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default HeaderUser;
