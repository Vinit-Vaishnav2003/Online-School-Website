import React, { useState } from 'react';
import './style.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isHomeClicked, setHomeClicked] = useState(false);
  const [isProfileClicked, setProfileClicked] = useState(false);
  const [isCourse_enrollmentleClicked, setCourse_enrollmentClicked] = useState(false);
  const [isAcademicsClicked, setAcademicsClicked] = useState(false);
  const [isFaculty_infoClicked, setFaculty_infoClicked] = useState(false);
  const [isExaminationClicked, setExaminationClicked] = useState(false);
  const [isLibraryClicked, setLibraryClicked] = useState(false);
  const [isOnline_PaymentClicked, setOnline_PaymentClicked] = useState(false);
  const [isMy_accountClicked, setMy_accountClicked] = useState(false);
  const [isContact_usClicked, setContact_usClicked] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  
  };

  const handleHomeClick = () => {
    setHomeClicked(!isHomeClicked);
    setProfileClicked(false);
    
  };

  const handleProfileClicked = () => {
    setProfileClicked(!isProfileClicked);
    setHomeClicked(false);
  };

  const handleFaculty_infoClicked = () => {
    setFaculty_infoClicked(!isFaculty_infoClicked);
    // setFaculty_infoClicked(false);
  };

  const handleCourse_enrollmentleClicked = () => {
    setCourse_enrollmentClicked(!isCourse_enrollmentleClicked);
    // setCourse_enrollmentClicked(false);
  };

  const handleAcademicsClicked = () => {
    setAcademicsClicked(!isAcademicsClicked);
    // setAcademicsClicked(false);
  };

  const handleExaminationClicked = () => {
    setExaminationClicked(!isExaminationClicked);
    // setAcademicsClicked(false);
  };

  const handleLibraryClicked = () => {
    setLibraryClicked(!isLibraryClicked);
    // setAcademicsClicked(false);
  };

  const handleOnline_PaymentClicked = () => {
    setOnline_PaymentClicked(!isOnline_PaymentClicked);
    // setAcademicsClicked(false);
  };

  const handleContact_usClicked = () => {
    setContact_usClicked(!isContact_usClicked);
    // setAcademicsClicked(false);
  };

  const handleMy_accountClicked = () => {
    setMy_accountClicked(!isMy_accountClicked);
    // setAcademicsClicked(false);
  };


  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="expand-button" onClick={handleExpand}>
        {expanded ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-bars"></i>}
      </div>
      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-solid fa-house" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/">Home</Link></a></li>
            <li><a class="dropdown-item"><Link to="/about ">about</Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleHomeClick}> Home</span>}
          {expanded && (
            <div className={`dropdown-options ${isHomeClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/">Home</Link></li>
              <li className="nav-item"><Link to="/about">About</Link></li>
            </div>
          )}
        </span>
      </div>
            
      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-solid fa-user" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/MY_Profile">MY_Profile</Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleProfileClicked}> Profile</span>}
          {expanded && (
            <div className={`dropdown-options ${isProfileClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/MY_Profile">MY_Profile</Link></li>
            </div>
          )}
        </span>
      </div>

            
      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
        <i class="fa-solid fa-book"data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/Course_enrollment">Enrollment</Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleCourse_enrollmentleClicked}> Course Enrollment </span>}
          {expanded && (
            <div className={`dropdown-options ${isCourse_enrollmentleClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/Course_enrollment">Enrollment</Link></li>
            </div>
          )}
        </span>
      </div>

      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-solid fa-chalkboard-user" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/Faculty_info">Faculty info </Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleFaculty_infoClicked}>Faculty info </span>}
          {expanded && (
            <div className={`dropdown-options ${isFaculty_infoClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/Faculty_info">Faculty info </Link></li>
            </div>
          )}
        </span>
      </div>

            
      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-solid fa-graduation-cap" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/Faculty_info">Time table </Link></a></li>
            <li><a class="dropdown-item"><Link to="/Class_message">Class message </Link></a></li>
            <li><a class="dropdown-item"><Link to="/Class_attendance">Class attendance</Link></a></li>
            <li><a class="dropdown-item"><Link to="/Academic_calendar">Academic calendar </Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={ handleAcademicsClicked}>Academics</span>}
          {expanded && (
            <div className={`dropdown-options ${isAcademicsClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/Time_table ">Time table </Link></li>
              <li className="nav-item"><Link to="/Class_message ">Class message </Link></li>
              <li className="nav-item"><Link to="/Class_attendance">Class attendance</Link></li>
              <li className="nav-item"><Link to="/Academic_calendar ">Academic calendar </Link></li>
            </div>
          )}
        </span>
      </div>
           
      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-solid fa-pen-nib" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/exam_schedule ">exam schedule</Link></a></li>
            <li><a class="dropdown-item"><Link to="/grade ">grade</Link></a></li>
            <li><a class="dropdown-item"><Link to="/grade_history ">grade history</Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={ handleExaminationClicked}>Examination</span>}
          {expanded && (
            <div className={`dropdown-options ${isExaminationClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/exam_schedule  ">exam schedule</Link></li>
              <li className="nav-item"><Link to="/marks  ">marks</Link></li>
              <li className="nav-item"><Link to="/grade ">grade</Link></li>
              <li className="nav-item"><Link to="/grade_history   ">grade history</Link></li>
            </div>
          )}
        </span>
      </div>


      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-solid fa-book-open" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/Library ">Library </Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleLibraryClicked}>Library</span>}
          {expanded && (
            <div className={`dropdown-options ${isLibraryClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/Library ">Library </Link></li>
            </div>
          )}
        </span>
      </div>

      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-solid fa-square-phone-flip" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="Contact_us">Contact us</Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleContact_usClicked}>Contact us</span>}
          {expanded && (
            <div className={`dropdown-options ${isContact_usClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="Contact_us">Contact us </Link></li>
            </div>
          )}
        </span>
      </div>

      
      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-brands fa-cc-visa" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/Online_Payment">OnlinePayment  </Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleOnline_PaymentClicked}>Online Payment </span>}
          {expanded && (
            <div className={`dropdown-options ${isOnline_PaymentClicked? 'big' : ''}`}>
              <li className="nav-item"><Link to="/Online_Payment">Online Payment  </Link></li>
            </div>
          )}
        </span>
      </div>

    </div>
  );
};


export default Sidebar;