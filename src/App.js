import React from "react";

import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Course_enrollment from "./components/Course_enrollment";
import Faculty_info from "./components/Faculty_info";
import Academics from "./components/Academics";
import Examination from "./components/Examination";
import Library from "./components/Library";
import Online_Payment from "./components/Online_Payment";
import My_account from "./components/My_account";
import Contact_us from "./components/Contact_us";

function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/course_enrollment" element={<Course_enrollment />} />
            <Route path="/faculty_info" element={<Faculty_info />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/examination" element={<Examination />} />
            <Route path="/library" element={<Library />} />
            <Route path="/online_Payment" element={<Online_Payment />} />
            <Route path="/my_account" element={<My_account />} />
            <Route path="/contact_us" element={<Contact_us />} />
            <Route path="/login" element={<Login />} />
          </Routes>

      </BrowserRouter>
          
  
  );
}

export default App;
