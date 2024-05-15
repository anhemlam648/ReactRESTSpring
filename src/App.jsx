// Ở file App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeUser from './components/HomeUser';
import Login from './components/Login';
import HomeTaskList from './components/HomeTaskList';
import Contact from './components/Contact';
import HomePage from './components/admin/HomePage';
import ListTaskAdmin from './components/admin/ListTaskAdmin';
import ListUserAdmin from './components/admin/ListUserAdmin';
import ListCategoryAdmin from './components/admin/ListCategoryAdmin';
import ContactAdmin from './components/admin/ContactAdmin';
import AddTask from './components/admin/AddTask'
import AddCategory from './components/admin/AddCategory';
import Register from './components/Register';
import UpdateTask from './components/admin/UpdateTask';
import UpdateCategory from './components/admin/UpdateCategory';
import DetailUser from './components/admin/DetailUser';
import SearchTask from './components/SearchTask';
import Detailtask from './components/Detailtask';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task" element={<HomeTaskList />} />
        <Route path="/detailtask" element={<Detailtask />} />
        <Route path="/listuser" element={<HomeUser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<HomePage />} />
        <Route path="/listtaskadmin" element={<ListTaskAdmin />} />
        <Route path="/listuseradmin" element={<ListUserAdmin />} />
        <Route path="/listcategoryadmin" element={<ListCategoryAdmin />} />
        <Route path="/contactadmin" element={<ContactAdmin />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/addcategory" element={<AddCategory/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/updatetask/:taskId" element={<UpdateTask />} />
        <Route path="/updatecategory/:categoryId" element={<UpdateCategory />} />
        <Route path="/deltailuser/:userId" element={<DetailUser />} />
        <Route path="/searchtask" element={<SearchTask />} />
      </Routes>
    </Router>
  );
}

export default App;