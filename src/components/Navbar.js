import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom"

function Navbar({Children}) {  
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Profile",
      name: "Profile",
      icons: <img src="./icons/user.png" alt="Profile Image" className="img"></img> 
    },                                        
    {
      path: "/Course_enrollment",
      name: "Course Enrollment ",
      icons: <img src="./icons/book.png" alt="Profile Image" className="img"></img> 
    },
    {
      path: "Faculty_info",
      name: "Faculty info",
      icons: <img src="./icons/noticeboard.png" alt="Profile Image" className="img"></img> 
    },
    {
      path: "Academics",
      name: "Academics",
      icons: <img src="./icons/mortarboard.png" alt="Profile Image" className="img"></img> 
    },
    {
      path: "Examination",
      name: "Examination",
      icons: <img src="./icons/exam.png" alt="Profile Image" className="img"></img> 
    },
    {
      path: "Library",
      name: "Library ",
      icons: <img src="./icons/high-school.png" alt="Profile Image" className="img"></img> 
    },
    {
      path: "Online_Payment ",
      name: "Online Payment ",
      icons: <img src="./icons/symbols.png" alt="Profile Image" className="img"></img> 
    },
    {
      path: "My_account",
      name: "Account Info",
      icons: <img src="./icons/password.png" alt="Profile Image" className="img"></img> 
    },
    {
      path: "Contact_us",
      name: "Contact us",
      icons: <img src="./icons/customer-service.png" alt="Profile Image" className="img"></img> 
    },
  ];
  return (
    <>
      <div>
        <div style={{width:isOpen ? "170px":"50px"}}className="navbar">
          <div className="top_section">
            <h1 className="logo">Menu</h1>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {
            menuItem.map((item,index)=>(
              <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="icons link_text">{item.icons}    {item.name}</div>
              

              </NavLink>
            ))
          }
        </div>
        <main>{Children}</main>
      </div>
    </>
  );
}

export default Navbar;


