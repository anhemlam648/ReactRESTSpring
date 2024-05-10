import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 600px;
`;

const ContentContainer = styled.div`
  padding: 20px;
  z-index: 1; 
  width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
`;

const InputFieldContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  width: 100%; 
  border-radius: 5px;
  padding: 8px;
  border: 1px solid #ccc;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px; 
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  text-align: center;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const DetailUser = () => {
  const { userId } = useParams();
  const [ user, setUser] = useState({
    name: '',
    email: '',
    accessLevel: '',
    createdAt: '',
    updatedAt: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/user/users/${userId}`, { timeout: 5000 })
    .then(response => {
      console.log('user data:', response.data);
      const userData = response.data;
      setUser(userData);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  return (
    <Container>
      <ContentContainer>
        <FormContainer>
            <label>Chi Tiết User</label>
            <InputFieldContainer>
              <Label htmlFor="Name">Name:</Label>
              <InputField type="text" id="Name" name="name" value={user.name} onChange={handleInputChange} required />
            </InputFieldContainer>
            <InputFieldContainer>
              <Label htmlFor="Email">Email:</Label>
              <InputField type="text" id="Email" name="email" value={user.email} onChange={handleInputChange} required />
            </InputFieldContainer>
            <InputFieldContainer>
              <Label htmlFor="AccessLevel">AccessLevel:</Label>
              <InputField type="text" id="AccessLevel" name="accessLevel" value={user.accessLevel} onChange={handleInputChange} required />
            </InputFieldContainer>
            <InputFieldContainer>
              <Label htmlFor="CreatedAt">CreatedAt:</Label>
              <InputField type="text" id="CreatedAt" name="createdAt" value={user.createdAt} onChange={handleInputChange} required />
            </InputFieldContainer>
            <InputFieldContainer>
              <Label htmlFor="UpdatedAt">UpdatedAt:</Label>
              <InputField type="text" id="UpdatedAt" name="updatedAt" value={user.updatedAt} onChange={handleInputChange} required />
            </InputFieldContainer>
            <StyledLink to="/listuseradmin">Back</StyledLink>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default DetailUser;
