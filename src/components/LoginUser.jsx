import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 320px; /* Tăng độ rộng của form */
  padding: 30px; /* Tăng khoảng cách lề ngoài */
  border-radius: 8px;
  background-color: #ffffff; /* Sửa màu nền thành màu trắng */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 90%;
  margin-bottom: 20px; /* Tăng khoảng cách giữa các input */
  padding: 15px; /* Tăng padding cho input */
  border: 1px solid #cccccc; /* Sửa màu viền thành màu xám nhạt */
  border-radius: 15px;
  font-size: 12px; /* Tăng kích thước chữ */
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterButton = styled(Button)`
  background-color: #007bff; /* Thay đổi màu nền cho nút đăng ký */
  margin-top: 10px;
`;

const LoginUser = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Đăng nhập</h2>
        <Input type="text" placeholder="Tên đăng nhập" />
        <Input type="password" placeholder="Mật khẩu" />
        <Button type="submit">Đăng nhập</Button>
        <p>Chưa có tài khoản? <RegisterButton onClick={handleRegister}>Đăng ký</RegisterButton></p>
      </LoginForm>
    </LoginContainer>
  );
};
export default LoginUser;
