
import styled from 'styled-components';
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180vh;
`;

const ContactContent = styled.div`
  background-color: #CCCCFF;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const ContactDescription = styled.p`
  margin-bottom: 20px;
`;

const ContactInfo = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
`;

const ContactItem = styled.li`
  margin-bottom: 10px;
`;
const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactTitle>Liên hệ</ContactTitle>
        <ContactDescription>
          Xin chào! Đây là trang liên hệ của chúng tôi.
          Trang web của chúng tôi cung cấp nội dung đa dạng về quản lý Task và nhiều lĩnh vực khác.
          Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, vui lòng liên hệ với chúng tôi qua thông tin bên dưới:
        </ContactDescription>
        <ContactInfo>
          <ContactItem>
            <strong>Email:</strong> info@Task.vn
          </ContactItem>
          <ContactItem>
            <strong>Số điện thoại:</strong> +012 345 6789
          </ContactItem>
          <ContactItem>
            <strong>Địa chỉ:</strong> Quận 9, Tp. Hồ Chí Minh
          </ContactItem>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactPage;
