import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Book from './components/Book';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import  AddStudent from './components/AddStudent'; 
import '../src/css/Navbar.css'
function App() {


  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path ='/'element ={<Home />}></Route>
        <Route path ='/books'element ={<Book />}></Route>
        <Route path ='/login'element ={<Login />}></Route>
         <Route path ='/dashboard'element ={<Dashboard />}></Route>
          <Route path ='/addstudent'element ={<AddStudent />}></Route>

        </Routes>
    </BrowserRouter>

  )
   
}

export default App
