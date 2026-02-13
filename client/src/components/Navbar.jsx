import React from "react";
import {Link} from "react-router-dom";
import '../css/Navbar.css'


const Navbar = ({role}) => {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <a href="/" className="navbar-brand">Book Store</a>
        </div>
        <div className="navbar-right">
            <a href="/books" className="navbar-link"> Books </a>
            {role === "admin" && <>
            <a href="/addbook" className="navbar-link">Add Book</a>
             <a href="/addstudent"className="navbar-link">Add Student</a>
             <a href="/dashboard" className="navbar-link">Dashboard</a>
             </>
             }
             {role === "" ?
             <a href="/login" className="navbar-link"> Login </a>
             :<a href="/logout" className="navbar-link"> Logout </a> 
             }
        </div>
    </nav>
  )
}
export default Navbar