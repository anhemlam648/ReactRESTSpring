import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  background-color: #CCCCFF; /* Màu hồng sữa */
  color: #fff; /* Màu chữ */
  padding: 10px; /* Khoảng cách từ viền */
  text-align: left; /* Căn giữa nội dung */
  font-size: 9px; /* Đặt kích thước chữ là 16px */
  position: fixed; /* Sử dụng vị trí cố định */
  top: 0; /* Đặt top về 0 để header nằm ở trên cùng */
  width: 100%; /* Chiều rộng 100% */
  z-index: 100; /* Đảm bảo header hiển thị trên các phần tử khác */
`;

const NavContainer = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 10px;
    display: flex;
    justify-content: center; /* Canh giữa các liên kết */
  }

  li {
    margin-right: 20px; /* Khoảng cách giữa các liên kết */
  }
`;

const HeaderUser = () => {
  return (
    <HeaderContainer>
      <h1>Ứng dụng quản lý task</h1>
      <li style={{ marginLeft: '1400px', marginTop: '-40px' }}><Link to='/login'>Đăng Nhập</Link></li>
      <NavContainer>
        <ul>
          <li>
            <Link to='/home'>Trang chủ</Link>
          </li>
          <li>
            <Link to='/tasks'>Task</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
};

export default HeaderUser;
