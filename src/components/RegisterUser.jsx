// import Header from './partical/Headeruser';
// import Footer from './partical/Footeruser';
import styled from 'styled-components';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
 
`;

const RegisterForm = styled.form`
  width: 300px; /* Tăng độ rộng của form */
  padding: 50px; 
  border-radius: 8px;
  background-color: #ffffff; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
  margin-left: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;
const InputField = styled.input`
  width: 100%; 
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`;

const LoginButton = styled(Button)`
  background-color: #007bff; /* Thay đổi màu nền cho nút đăng nhập */
  margin-top: 10px;
`;
const RegisterUser = () => {
    const [nameUser, setNameUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    const [accessLevelUser, setAccessLevelUser] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');

    const handleUserNameChange = (e) => {
      setNameUser(e.target.value);
    };

    const handleUserEmailChange = (e) => {
        setEmailUser(e.target.value);
    };

    const handleUserPasswordChange = (e) => {
        setPasswordUser(e.target.value);
    };

    const handleUserAccessLevelChange = (e) => {
        setAccessLevelUser(e.target.value);
    };

    const handleUserCreatedChange = (e) => {
        setCreatedAt(e.target.value);
    };      

    const handleUserUpdatedChange = (e) => {
        setUpdatedAt(e.target.value);
    }; 

    const checkEmptyFields = () => {
      if (!nameUser || !emailUser || !passwordUser || !accessLevelUser || !createdAt || !updatedAt) {
        alert('Vui lòng điền đầy đủ thông tin');
        return false;
      }
      return true;
    };
    const handleRegister = (e) => {
      const changeCreateAt = moment(createdAt).format('YYYY-MM-DDTHH:mm:ss');
      const changeUpdateAt = moment(updatedAt).format('YYYY-MM-DDTHH:mm:ss');
      e.preventDefault();    
      if (!checkEmptyFields()) {
        return;
      }
    
      axios.post('http://localhost:8080/user/add', {
        name:nameUser,
        email:emailUser,
        password:passwordUser,
        accessLevel:accessLevelUser,
        createdAt:changeCreateAt,
        updatedAt:changeUpdateAt
      })
      .then(response => { 
        console.log('Đã gửi dữ liệu:', response.data);
        window.location.href ="/login";
      })
      .catch(error => {
        console.error('Lỗi khi thêm category:', error);
      });
    };
const navigator = useNavigate();
function LoginUser(){
    navigator("/login")
}

  return (
    <div>
   <RegisterContainer>
      <RegisterForm onSubmit={handleRegister}>
        <h2>Đăng ký</h2>
        <div>
        <label htmlFor="Name">Name:</label>
        <InputField type="text" id="Name" value={nameUser} onChange={handleUserNameChange} required/>
        </div>
        <div>
        <label htmlFor="Email">Email:</label>
        <InputField type="text" id="Email" value={emailUser} onChange={handleUserEmailChange} required/>
        </div>
        <div>
        <label htmlFor="Password">Password:</label>
        <InputField type="text" id="Password" value={passwordUser} onChange={handleUserPasswordChange} required/>
        </div>
        <div>
        <label htmlFor="accessLevel">accessLevel:</label>
        <InputField type="text" id="accessLevel" value={accessLevelUser} onChange={handleUserAccessLevelChange} required/>
        </div>
        <div>
        <label htmlFor="createdAt">createdAt:</label>
        <InputField type="date" id="createdAt" value={createdAt} onChange={handleUserCreatedChange} required/>
        </div>
        <div>
        <label htmlFor="updatedAt">updatedAt:</label>
        <InputField type="date" id="updatedAt" value={updatedAt} onChange={handleUserUpdatedChange} required/>
        </div>
        <Button type="submit">Đăng ký</Button>
        <p>
          Đã có tài khoản?{" "}
          <LoginButton onClick={LoginUser}>Đăng nhập</LoginButton>
        </p>
      </RegisterForm>
    </RegisterContainer>
    </div>
  );
};
export default RegisterUser;
