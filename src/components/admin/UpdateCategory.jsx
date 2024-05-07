import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";


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
  margin-left: 160px;
  margin-bottom: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const UpdateCategory = () => {
  const { categoryId } = useParams();
  const [category, setCategoryId] = useState({
    categoryName: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/category/categorys/${categoryId}`, { timeout: 5000 })
    .then(response => {
      console.log('category data:', response.data);
      const categoryData = response.data;
      setCategoryId(categoryData);
    })
    .catch(error => {
      console.error('Error fetching category data:', error);
    });
  }, [categoryId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryId(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.put(`http://localhost:8080/category/update/${categoryId}`, {
      ...category,

    })
      .then(response => {
        console.log('Data updated:', response.data);
        window.location.href = "/listcategoryadmin";
      })
      .catch(error => {
        console.error('Error updating category data:', error);
      });
  };

  return (
    <Container>
      <ContentContainer>
        <FormContainer>
            <label>UpdateCategory</label>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="categoryName">CategoryName:</label>
              <InputField type="text" id="categoryName" name="categoryName" value={category.categoryName} onChange={handleInputChange} required />
            </div>
            <SubmitButton type="submit">Update Category</SubmitButton>
            <StyledLink to="/listcategoryadmin">Back to</StyledLink>
          </form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default UpdateCategory;
