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

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const navigator = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8080/category/list')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách task:', error);
            });
    }, []);
    function addCategory(){
        navigator('/#')
    }
    return (
        <TaskListContainer>
               <div style={{marginBottom: '20px'}}>
                <button className="addtocategory" onClick={addCategory}>Add Category</button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <Th>Category_id </Th>
                        <Th>Name</Th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.categoryId }>
                            <Td>{category.categoryId }</Td>
                            <Td>{category.categoryName}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TaskListContainer>
    );
};

export default CategoryList;
