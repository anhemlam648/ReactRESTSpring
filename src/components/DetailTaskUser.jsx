import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import SelectField from "./admin/SelectField";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-left: 600px;
`;

const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%; 
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const DetailsTask = () => {
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
        setTask(response.data);
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

  return (
    <Container>
      <FormContainer>
        <div>
          <Label htmlFor="taskName">Task Name:</Label>
          <InputField type="text" id="taskName" name="taskName" value={task.taskName} readOnly />
        </div>
        <div>
          <Label htmlFor="description">Description:</Label>
          <InputField type="text" id="description" name="description" value={task.description} readOnly />
        </div>
        <div>
          <Label htmlFor="status">Status:</Label>
          <InputField type="text" id="status" name="status" value={task.status} readOnly />
        </div>
        <div>
          <Label htmlFor="startTime">Start Time:</Label>
          <InputField type="datetime-local" id="startTime" name="startTime" value={moment(task.startTime).format('YYYY-MM-DDTHH:mm')} readOnly />
        </div>
        <div>
          <Label htmlFor="deadline">Deadline:</Label>
          <InputField type="datetime-local" id="deadline" name="deadline" value={moment(task.deadline).format('YYYY-MM-DDTHH:mm')} readOnly />
        </div>
        <div>
          <Label htmlFor="categoryId">Category:</Label>
          <SelectField
            id="categoryId"
            value={task.categoryId}
            options={categories.map(category => ({ value: category.categoryId, label: category.categoryName }))}
            isDisabled={true}
          />
        </div>
        <div>
          <Label htmlFor="creatorId">Creator:</Label>
          <SelectField
            id="creatorId"
            value={task.creatorId}
            options={users.map(user => ({ value: user.userId, label: user.name }))}
            isDisabled={true}
          />
        </div>
        <div>
          <Label htmlFor="createdAt">Created At:</Label>
          <InputField type="datetime-local" id="createdAt" name="createdAt" value={moment(task.createdAt).format('YYYY-MM-DDTHH:mm')} readOnly />
        </div>
        <div>
          <Label htmlFor="updatedAt">Updated At:</Label>
          <InputField type="datetime-local" id="updatedAt" name="updatedAt" value={moment(task.updatedAt).format('YYYY-MM-DDTHH:mm')} readOnly />
        </div>
        <StyledLink to="/task">Back to Task List</StyledLink>
      </FormContainer>
    </Container>
  );
};

export default DetailsTask;
