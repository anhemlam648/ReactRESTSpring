import styled from 'styled-components';

// Component Header
const HeaderContainer = styled.div`
  background-color: #CCCCFF; /* Màu hồng sữa */
  color: #fff; /* Màu chữ */
  padding: 10px; /* Khoảng cách từ viền */
  text-align: left; /* Căn giữa nội dung */
  font-size: 9px; /* Đặt kích thước chữ là 9px */
  position: fixed; /* Sử dụng vị trí cố định */
  top: 0; /* Đặt top về 0 để header nằm ở trên cùng */
  width: 100%; /* Chiều rộng 100% */
  z-index: 1000; /* Đảm bảo header hiển thị trên các phần tử khác */
`;

const HeaderUser = () => {
  return (
    <HeaderContainer>
      <h1>Ứng dụng quản lý task</h1>
    </HeaderContainer>
  );
}; // đã thêm dấu ngoặc đóng sau tên hàm

export default HeaderUser; // đã thêm dòng này để xuất ra ngoài
