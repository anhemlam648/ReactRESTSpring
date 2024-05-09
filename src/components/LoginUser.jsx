import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const CheckEmptyFields = () =>{
    if(!email){
      alert("vui lòng nhập email");
      return false;
    }
    else if(!password){
      alert("vui lòng nhập mật khẩu");
      return false;
    }
    return true;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if(!CheckEmptyFields()){
      return;
    }
    axios.post('http://localhost:8080/user/login', {
      email: email,
      password: password,
    }).then(response => {
      const loginMessage = response.data;
      if (loginMessage.status) {
        console.log('Đăng nhập thành công', loginMessage.message);
        navigator("/listuser");
      } else {
        console.log('Đăng nhập thất bại', loginMessage.message);
        alert("Đăng nhập thất bại. " + loginMessage.message);
        navigator("/login");
      }
    }).catch(error => {
      console.log('Đăng nhập thất bại', error);
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
      navigator("/login");
    });
  };
   
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigator = useNavigate();
  function Register(){
        navigator("/register")
  }
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Đăng nhập</h2>
        <Input id="email" type="text" placeholder="Tên đăng nhập"  value={email} onChange={handleEmailChange} />
        <Input id="password" type="password" placeholder="Mật khẩu" value={password} onChange={handlePasswordChange}/>
        <Button type="submit">Đăng nhập</Button>
        <p>Chưa có tài khoản? <RegisterButton onClick={Register}>Đăng ký</RegisterButton></p>
      </LoginForm>
    </LoginContainer>
  );
};
export default LoginUser;
