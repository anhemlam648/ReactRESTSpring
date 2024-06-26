import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TaskListContainer = styled.div`
    margin-top: 40px;
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
const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const navigator = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8080/tasks/list',{ timeout: 5000 })
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách task:', error);
            });
    }, []);
    const deleteTask = (taskId) => {
        axios.delete(`http://localhost:8080/tasks/delete/${taskId}`)
            .then(response => {
                console.log('Task đã được xóa:', response.data);
                // Cập nhật lại danh sách Task
                axios.get('http://localhost:8080/tasks/list')
                    .then(response => {
                        setTasks(response.data);
                    })
                    .catch(error => {
                        console.error('Lỗi khi cập nhật danh sách task:', error);
                    });
            })
            .catch(error => {
                console.error('Lỗi khi xóa task:', error);
            });
    };
    function addnewTask(){
        navigator('/addtask') 
        
    }
    function updateTask(taskId) {
        navigator(`/updatetask/${taskId}`); 
    }
    return (
        <TaskListContainer>
            <div style={{marginBottom: '20px'}}>
                <button className="addtotask" onClick={addnewTask}>Add Task</button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th>Status</Th>
                        <Th>Start Time</Th>
                        <Th>Deadline</Th>
                        <Th>Category </Th>
                        <Th>Creator </Th>
                        <Th>Created</Th>
                        <Th>Updated</Th>
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
                            <Td>{task.categoryId}</Td>
                            <Td>{task.creatorId}</Td>
                            <Td>{task.createdAt}</Td>
                            <Td>{task.updatedAt}</Td>
                            <Td>
                                <Button onClick={() => updateTask(task.taskId)}>Update</Button>
                                <Button onClick={() => deleteTask(task.taskId)}>Delete</Button>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TaskListContainer>
    );
};

export default TaskList;
