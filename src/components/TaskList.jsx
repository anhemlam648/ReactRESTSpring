import  { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TaskListContainer = styled.div`
    margin-top: 40px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Th = styled.th`
    background-color: #f2f2f2;
    padding: 12px; /* Độ dày padding */
    text-align: center; /* Căn giữa nội dung */
    font-weight: bold; /* Chữ đậm */
    border-bottom: 1px solid #ddd; /* Đường viền dưới */
`;

const Td = styled.td`
    padding: 12px; /* Độ dày padding */
    border-bottom: 1px solid #ddd; /* Đường viền dưới */
    text-align: center; /* Căn giữa nội dung */
`;

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách task:', error);
            });
    }, []);

    return (
        <TaskListContainer>
            <Table>
                <thead>
                    <tr>
                        <Th>ID</Th>
                        <Th>Title</Th>
                        <Th>Description</Th>
                        <Th>Due Date</Th>
                        <Th>Status</Th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <Td>{task.id}</Td>
                            <Td>{task.title}</Td>
                            <Td>{task.description}</Td>
                            <Td>{task.due_date}</Td>
                            <Td>{task.status}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TaskListContainer>
    );
};

export default TaskList;
