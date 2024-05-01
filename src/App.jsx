// Ở file App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeUser from './components/HomeUser';
import Login from './components/Login';
import HomeTaskList from './components/HomeTaskList';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import ListTaskAdmin from './components/ListTaskAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task" element={<HomeTaskList />} />
        <Route path="/detailtask" element={<HomeUser />} />
        <Route path="/listuser" element={<HomeUser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<HomePage />} />
        <Route path="/listtaskadmin" element={<ListTaskAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;