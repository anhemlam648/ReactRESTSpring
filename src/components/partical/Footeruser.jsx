import styled from "styled-components";

// Component Footer
const FooterContainer = styled.footer`
  background-color:  #CCCCFF; /* Màu nền đen */
  color: #fff; /* Màu chữ */
  padding: 10px; /* Khoảng cách từ viền */
  text-align: center; /* Căn giữa nội dung */
  position: fixed; /* Sử dụng vị trí cố định */
  bottom: 0; /* Đặt bottom về 0 để footer nằm ở dưới cùng */
  width: 100%; /* Chiều rộng 100% */
  z-index: 1000; /* Đảm bảo footer hiển thị trên các phần tử khác */
`;

const FooterUser = () => {
  return (
    <FooterContainer>
      <p>© 2024 Ứng dụng quản lý task. Tất cả quyền được bảo lưu.</p>
    </FooterContainer>
  );
};

export default FooterUser;
