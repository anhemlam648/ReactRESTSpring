import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const TaskListContainer = styled.div`
    margin-top: 180px;
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

const FilterContainer = styled.div`
    margin: 50px 0px;
    text-align: center;

    select {
        padding: 10px 15px;
        font-size: 16px;
        margin-right: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f9f9f9;
    }

    button {
        padding: 10px 15px;
        font-size: 16px;
        cursor: pointer;
        margin-left: 10px;
        border: none;
        border-radius: 4px;
        background-color: #007BFF;
        color: white;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const TaskList = () => {
    const [categoryName, setCategoryName] = useState('');
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/tasks/list')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách task:', error);
            });
        // lấy danh sách category    
        axios.get('http://localhost:8080/category/list')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách categories:', error);
            });
    }, []);

    const detailsTask = (taskId) => {
        navigator(`/detailtask/${taskId}`);
    };
    // const handleCategoryChange = (e) =>{
    //     const selectedCategory = e.target.value;
    //     if (selectedCategory === "all") {
    //         axios.get('http://localhost:8080/category/list')
    //         .then(response => {
    //             setCategories(response.data);
    //         })
    //         .catch(error =>{
    //             console.log("error list category", error);
    //         });
    //     }else{
    //         setCategoryName(selectedCategory);
    //     }
    // }
    const FilterTask = async (e) => {
        e.preventDefault();
        if (categoryName.trim() !== '') {
            try {
                const response = await axios.get(`http://localhost:8080/tasks/filtertask`, {
                    params: {
                        categoryName: categoryName
                    }
                });
                if (response.data && response.data.length > 0) {
                    setTasks(response.data);
                } else {
                    alert('Task không tìm thấy trong danh sách');
                    window.location.href = "/task";
                }
            } catch (error) {
                console.error('lỗi tìm kiếm Task theo loại:', error);
                alert('lỗi tìm kiếm Task theo loại');
                navigator('/task');
            }
        }
    };

    return (
        <TaskListContainer>
            <FilterContainer>
            <select value={categoryName} onChange={(e) => setCategoryName(e.target.value)}>
                <option value="">Chọn Loại</option>
                {categories.map(category =>(
                 <option key={category.categoryId} value={category.categoryName}>{category.categoryName}</option>
                ))}
               </select>
               {/* <select value={categoryName} onChange={(e) => handleCategoryChange(e)}>
                    <option value="">Chọn Loại</option>
                    <option value="all">Tất Cả</option>
                    {categories.map(category => (
                        <option key={category.categoryId} value={category.categoryName}>{category.categoryName}</option>
                    ))}
                </select> */}
                <button onClick={FilterTask}>Filter</button>
            </FilterContainer>
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

export default TaskList;
