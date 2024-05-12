
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const HeaderUser = () => {
  const userName = sessionStorage.getItem('userName');
  console.log('userName:', userName);
  const handleLogout = () => {
    // Xóa session
    sessionStorage.removeItem('userName');
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
    </HeaderContainer>
  );
};

export default HeaderUser;
