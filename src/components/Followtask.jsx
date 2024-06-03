import styled from "styled-components";
// import HeaderUser from "./partical/Headeruser";
// import FooterUser from "./partical/Footeruser";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TaskListContainer = styled.div`
    margin-top: -30px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Th = styled.th`
    background-color: #f2f2f2;
    padding: 12px;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: center;
`;

const Button = styled.button`
    margin-right: 5px;
`;

const Followtask = () => {
  const [tasks, setTasks] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    const creatorId = sessionStorage.getItem('userId');
    if(creatorId){
      axios.get(`http://localhost:8080/tasks/creator/${creatorId}`)
        .then(response => {

          if (Array.isArray(response.data)) {
            setTasks(response.data);
          }else {
            console.error('API không lấy được danh sách:', response.data);
        }
        })
        .catch(error => {
            console.error('Lỗi khi lấy danh sách task:', error);
        });
  } else{
    console.log("userId không tồn tại trong session storage");
  }
}, []);
  const detailsTask = (taskId) => {
    navigator(`/detailtask/${taskId}`);
  };
  return (
      <TaskListContainer>
          <Table>
              <thead>
                  <tr>
                      <Th>ID</Th>
                      <Th>Name</Th>
                      <Th>Description</Th>
                      <Th>Status</Th>
                      <Th>Start Time</Th>
                      <Th>Deadline</Th>
                      <Th>Action</Th>
                  </tr>
              </thead>
              <tbody>
                  {tasks.map(task => (
                      <tr key={task.taskId}>
                          <Td>{task.taskId}</Td>
                          <Td>{task.taskName}</Td>
                          <Td>{task.description}</Td>
                          <Td>{task.status}</Td>
                          <Td>{task.startTime}</Td>
                          <Td>{task.deadline}</Td>
                          <Td>
                              <Button onClick={() => detailsTask(task.taskId)}>Details</Button>
                          </Td>
                      </tr>
                  ))}
              </tbody>
          </Table>
      </TaskListContainer>
  );
};
export default Followtask;
