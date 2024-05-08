import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TaskListContainer = styled.div`
    margin-top: 100px;
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
const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const navigator = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8080/category/list')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách category:', error);
            });
    }, []);
    const deleteCategory = (categoryId) => {
        axios.delete(`http://localhost:8080/category/delete/${categoryId}`)
            .then(response => {
                console.log('Category đã được xóa:', response.data);
                // Cập nhật lại danh sách Task
                axios.get('http://localhost:8080/category/list')
                    .then(response => {
                        setCategories(response.data);
                    })
                    .catch(error => {
                        console.error('Lỗi khi cập nhật danh sách category:', error);
                    });
            })
            .catch(error => {
                console.error('Lỗi khi xóa category:', error);
            });
    };
    function addCategory(){
        navigator('/addcategory')
    }
    function updateCategory(categoryId) {
        navigator(`/updatecategory/${categoryId}`); 
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
                        <Th>Action</Th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.categoryId }>
                            <Td>{category.categoryId }</Td>
                            <Td>{category.categoryName}</Td>
                            <Td>
                                <Button onClick={() => updateCategory(category.categoryId)}>Update</Button>
                                <Button onClick={() => deleteCategory(category.categoryId)}>Delete</Button>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TaskListContainer>
    );
};

export default CategoryList;
