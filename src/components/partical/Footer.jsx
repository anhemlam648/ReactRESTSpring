import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #CCCCFF; /* Màu hồng sữa */
  color: #fff; /* Màu chữ */
  padding: 10px 20px; /* Khoảng cách từ viền */
  text-align: left; /* Căn trái cho phần nội dung */
  font-size: 13px; /* Đặt kích thước chữ */
  position: fixed; /* Sử dụng vị trí cố định */
  bottom: 0; /* Đặt bottom về 0 để footer nằm ở dưới cùng */
  width: 100%; /* Chiều rộng 100% */
  z-index: 100; /* Đảm bảo footer hiển thị trên các phần tử khác */
  display: flex; /* Sử dụng flexbox để căn chỉnh phần tử bên trong */
  justify-content: space-between; /* Căn cách hai phần tử bên trong ra hai phía */
  align-items: center; 
  transition: all 0.3s ease; 
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ContactText = styled.p`
  margin-right: 20px;
`;

const ContactImage = styled.img`
  width: 60px; 
  height: 60px; 
  border-radius: 50%; 
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h2>Liên hệ</h2>
        <ContactImage src="https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg" alt="Contact" />
        <ContactInfo>
            <div><ContactText>Email: vunghia467@gmail.com</ContactText></div>
          <div><ContactText>Phone: 1900-000-000</ContactText></div> 
        </ContactInfo>
      </div>
    </FooterContainer>
  );
};

export default Footer;


