import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
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

const UpdateTask = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState({
    taskName: '',
    description: '',
    status: '',
    startTime: '',
    deadline: '',
    createdAt: '',
    updatedAt: '',
    categoryId: '',
    creatorId: ''
  });
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/tasks/task/${taskId}`, { timeout: 5000 })
    .then(response => {
      console.log('Task data:', response.data);
      const taskData = response.data;
      setTask(taskData);
    })
    .catch(error => {
      console.error('Error fetching task data:', error);
    });

    axios.get('http://localhost:8080/category/list', { timeout: 5000 })
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching category data:', error);
      });

    axios.get('http://localhost:8080/user/list', { timeout: 5000 })
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [taskId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedStartTime = moment(task.startTime).format('YYYY-MM-DDTHH:mm:ss');
    const formattedDeadline = moment(task.deadline).format('YYYY-MM-DDTHH:mm:ss');
    const formattedCreatedAt = moment(task.createdAt).format('YYYY-MM-DDTHH:mm:ss');
    const formattedUpdatedAt = moment(task.updatedAt).format('YYYY-MM-DDTHH:mm:ss');

    axios.put(`http://localhost:8080/tasks/update/${taskId}`, {
      ...task,
      startTime: formattedStartTime,
      deadline: formattedDeadline,
      createdAt: formattedCreatedAt,
      updatedAt: formattedUpdatedAt
    })
      .then(response => {
        console.log('Data updated:', response.data);
        window.location.href = "/listtaskadmin";
      })
      .catch(error => {
        console.error('Error updating task data:', error);
      });
  };

  return (
    <Container>
      <ContentContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="taskName">Task Name:</label>
              <InputField type="text" id="taskName" name="taskName" value={task.taskName} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <InputField type="text" id="description" name="description" value={task.description} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="status">Status:</label>
              <InputField type="text" id="status" name="status" value={task.status} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="startTime">Start Time:</label>
              <InputField type="datetime-local" id="startTime" name="startTime" value={moment(task.startTime).format('YYYY-MM-DDTHH:mm')} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="deadline">Deadline:</label>
              <InputField type="datetime-local" id="deadline" name="deadline" value={moment(task.deadline).format('YYYY-MM-DDTHH:mm')} onChange={handleInputChange} required />
            </div>
            {/* <div>
              <label htmlFor="categoryId">Category:</label>
              <SelectField id="categoryId" name="categoryId" value={task.categoryId} onChange={handleInputChange} required options={categories.map(category => ({ value: category.categoryId, label: category.categoryName }))} />
            </div>
            <div>
              <label htmlFor="creatorId">Creator:</label>
              <SelectField id="creatorId" name="creatorId" value={task.creatorId} onChange={handleInputChange} required options={users.map(user => ({ value: user.userId, label: user.name }))} />
            </div>  */}
            <div>
            <label htmlFor="categoryId">Category:</label>
            <SelectField id="categoryId" value={task.categoryId} 
                options={categories.map(category => ({ value: category.categoryId, label: category.categoryName }))} 
                onChange={(e) => setTask(prevState => ({ ...prevState, categoryId: e.target.value }))}
            />
            </div>
            <div>
            <label htmlFor="creatorId">Creator:</label>
            <SelectField id="creatorId" value={task.creatorId} 
                options={users.map(user => ({ value: user.userId, label: user.name }))} 
                onChange={(e) => setTask(prevState => ({ ...prevState, creatorId: e.target.value }))}
            />
            </div>
            <div>
              <label htmlFor="createdAt">Created At:</label>
              <InputField type="datetime-local" id="createdAt" name="createdAt" value={moment(task.createdAt).format('YYYY-MM-DDTHH:mm')} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="updatedAt">Updated At:</label>
              <InputField type="datetime-local" id="updatedAt" name="updatedAt" value={moment(task.updatedAt).format('YYYY-MM-DDTHH:mm')} onChange={handleInputChange} required />
            </div>
            <SubmitButton type="submit">Update Task</SubmitButton>
            <StyledLink to="/listtaskadmin">Back to Task List</StyledLink>
          </form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default UpdateTask;
