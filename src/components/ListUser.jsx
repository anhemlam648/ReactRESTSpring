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
const UserList = () => {
    const [users, setUser] = useState([]);
    const navigator = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8080/user/list',{ timeout: 5000 })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách user:', error);
            });
    }, []);
    function deltailUser(userId){
        navigator(`/deltailsuser/${userId}`); 
    }
    return (
        <TaskListContainer>
            <Table>
                <thead>
                    <tr>
                        <Th>User_id </Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Access_level</Th>
                        <Th>Created_at</Th>
                        <Th>Updated_at</Th>
                        <Th>Action</Th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.userId }>
                            <Td>{user.userId }</Td>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.accessLevel}</Td>
                            <Td>{user.createdAt}</Td>
                            <Td>{user.updatedAt}</Td>
                            <Td>
                                <Button onClick={() => deltailUser(user.userId)}>Details</Button>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TaskListContainer>
    );
};

export default UserList;
