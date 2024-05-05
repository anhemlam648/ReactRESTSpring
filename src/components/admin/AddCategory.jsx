import { useState } from "react";
import axios from "axios";
import styled from 'styled-components';// Thêm import PropTypes
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative; 
  margin-left: 550px;
`;

const ContentContainer = styled.div`
  padding: 20px;
  margin-top: 90px;
  z-index: 1; 
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px; 
  margin: 0 auto; 
`;

const InputField = styled.input`
  width: 100%; 
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  width: 100%; 
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 5px;
  margin-bottom: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;
const StyledLink = styled(Link)`
  width: 100%; 
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 161px;
  margin-bottom: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const AddCategory = () => {
  const [CategoryName, setCategoryName] = useState('');

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const checkEmptyFields = () => {
    if (!CategoryName) {
      alert('Vui lòng điền đầy đủ thông tin');
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();    
    if (!checkEmptyFields()) {
      return;
    }
  
    axios.post('http://localhost:8080/category/add', {
        categoryName:CategoryName

    })
    .then(response => { 
      console.log('Đã gửi dữ liệu:', response.data);
      window.location.href ="/listcategoryadmin";
    })
    .catch(error => {
      console.error('Lỗi khi thêm category:', error);
    });
  };

  return (
    <Container>
      <ContentContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="CategoryName">CategoryName:</label>
              <InputField type="text" id="CategoryName" value={CategoryName} onChange={handleCategoryNameChange} required/>
            </div>
            <SubmitButton type="submit" onClick={handleSubmit}>Thêm Category</SubmitButton>
            <StyledLink to="/listcategoryadmin">Trở Lại</StyledLink>
          </form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};


export default AddCategory;
