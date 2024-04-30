import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #CCCCFF; /* Màu hồng sữa */
  color: #fff; /* Màu chữ */
  padding: 10px; /* Khoảng cách từ viền */
  text-align: left; /* Căn giữa nội dung */
  font-size: 10px; /* Đặt kích thước chữ là 12px */
  position: fixed; /* Sử dụng vị trí cố định */
  top: 0; /* Đặt top về 0 để header nằm ở trên cùng */
  width: 100%; /* Chiều rộng 100% */
  z-index: 1000; /* Đảm bảo header hiển thị trên các phần tử khác */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Ứng dụng quản lý task</h1>
    </HeaderContainer>
  );
};

export default Header;
