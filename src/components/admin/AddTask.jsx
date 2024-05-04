import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import styled from 'styled-components';
// import PropTypes from 'prop-types'; // Thêm import PropTypes
import { Link } from "react-router-dom";
import SelectField from "./SelectField";

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
  margin-left: 135px;
  margin-bottom: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [startTime, setStartTime] = useState('');
  const [deadline, setDeadline] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [creatorId, setCreatorId] = useState('');
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // call api categories 
    axios.get('http://localhost:8080/category/list',{ timeout: 5000 })
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('lỗi lấy danh sách category:', error);
      });
      // call api user
      axios.get('http://localhost:8080/user/list',{ timeout: 5000 })
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Lỗi lấy danh sách user:', error);
      });
      
  }, []);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleCreatedAtChange = (e) => {
    setCreatedAt(e.target.value);
  };

  const handleUpdatedAtChange = (e) => {
    setUpdatedAt(e.target.value);
  };

  const checkEmptyFields = () => {
    if (!taskName || !description || !status || !startTime || !deadline || !createdAt || !updatedAt) {
      alert('Vui lòng điền đầy đủ thông tin');
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedStartTime = moment(startTime).format('YYYY-MM-DDTHH:mm:ss');
    const formattedDeadline = moment(deadline).format('YYYY-MM-DDTHH:mm:ss');
    const formattedCreatedAt = moment(createdAt).format('YYYY-MM-DDTHH:mm:ss');
    const formattedUpdatedAt = moment(updatedAt).format('YYYY-MM-DDTHH:mm:ss');
    
    if (!checkEmptyFields()) {
      return;
    }
  
    axios.post('http://localhost:8080/tasks/add', {
      taskName,
      description,
      status,
      startTime: formattedStartTime,
      deadline: formattedDeadline,
      createdAt: formattedCreatedAt,
      updatedAt: formattedUpdatedAt,
      categoryId, 
      creatorId
    })
    .then(response => { 
      console.log('Đã gửi dữ liệu:', response.data);
      window.location.href ="/listtaskadmin";
    })
    .catch(error => {
      console.error('Lỗi khi thêm task:', error);
    });
  };

  return (
    <Container>
      <ContentContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="taskName">Task Name:</label>
              <InputField type="text" id="taskName" value={taskName} onChange={handleTaskNameChange} required/>
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <InputField type="text" id="description" value={description} onChange={handleDescriptionChange} required/>
            </div>
            <div>
              <label htmlFor="status">Status:</label>
              <InputField type="text" id="status" value={status} onChange={handleStatusChange} required/>
            </div>
            <div>
              <label htmlFor="startTime">Start Time:</label>
              <InputField type="datetime-local" id="startTime" value={startTime} onChange={handleStartTimeChange} required/>
            </div>
            <div>
              <label htmlFor="deadline">Deadline:</label>
              <InputField type="datetime-local" id="deadline" value={deadline} onChange={handleDeadlineChange} required/>
            </div>
            {/* <div>
            <label htmlFor="category">Category:</label>
            <SelectField
                id="categoryId"
                value={String(categoryId)}
                onChange={(e) => setCategoryId(e.target.value)}
                // onChange={(e) => {
                //   // const value = setCategoryId(e.target.value);
                //   // // if (!isNaN(value)) { 
                //   //   setCategoryId(value);
                //   // // }
                // }}
                required
                options={categories.map(category => ({
                  value: String(category.categoryId),
                  label: category.categoryName || "" 
                }))} 
              />
            </div> */}
            {/* <div>
            <label htmlFor="creator">Creator:</label>
            <SelectField
            id="creatorId"
            value={String(creatorId)}
            onChange={(e) => setCreatorId(e.target.value)}
            // onChange={(e) => {
            //   const value = BigInt(e.target.value);
            //   // if (!isNaN(value)) { 
            //     setCreatorId(value);
              
            // }}
            required
            options={users.map(user => ({
              value: String(user.userId),
              label: user.name || "" 
            }))} 
          />
            </div> */}
              <div>
              <label htmlFor="categoryId">Category:</label>
              <SelectField id="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required options={categories.map(category => ({ value: category.categoryId, label: category.categoryName }))} />
            </div>
            <div>
              <label htmlFor="creatorId">Creator:</label>
              <SelectField id="creatorId" value={creatorId} onChange={(e) => setCreatorId(e.target.value)} required options={users.map(user => ({ value: user.userId, label: user.name }))} />
            </div>
            <div>
              <label htmlFor="createdAt">Created At:</label>
              <InputField type="datetime-local" id="createdAt" value={createdAt} onChange={handleCreatedAtChange} required/>
            </div>
            <div>
              <label htmlFor="updatedAt">Updated At:</label>
              <InputField type="datetime-local" id="updatedAt" value={updatedAt} onChange={handleUpdatedAtChange}  required/>
            </div>
            <SubmitButton type="submit" onClick={handleSubmit}>Thêm Task</SubmitButton>
            <StyledLink to="/listtaskadmin">Trở Lại</StyledLink>
          </form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};


export default AddTask;
