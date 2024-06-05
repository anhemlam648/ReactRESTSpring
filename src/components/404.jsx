import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  margin-left: 580px;
`;

const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 24px;
`;

const Message = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const Home = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>404</Title>
      <Message>Trang bạn tìm kiếm không tồn tại.</Message>
      <Button onClick={Home}>Quay về trang chủ</Button>
    </Container>
  );
};

export default NotFoundPage;
