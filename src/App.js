import React from "react";

import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import MY_Profile from "./components/MY_Profile";
import Course_enrollment from "./components/Course_enrollment";
import Faculty_info from "./components/Faculty_info";
import Time_table  from "./components/Time_table";
import Class_message   from "./components/Class_message";
import Class_attendance  from "./components/Class_attendance";
import Academic_calendar   from "./components/Academic_calendar";
import Exam_schedule  from "./components/Exam_schedule";
import Marks from "./components/Marks";
import Grade from "./components/Grade";
import Grade_history   from "./components/Grade_history";
import Library from "./components/Library";
import Online_Payment from "./components/Online_Payment";
import My_account from "./components/My_account";
import Contact_us from "./components/Contact_us";

function App() {
  return (
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MY_Profile" element={<MY_Profile />} />
            <Route path="/course_enrollment" element={<Course_enrollment />} />
            <Route path="/faculty_info" element={<Faculty_info />} />
            <Route path="/Time_table " element={<Time_table />} />
            <Route path="/library" element={<Library />} />
            <Route path="/online_Payment" element={<Online_Payment />} />
            <Route path="/my_account" element={<My_account />} />
            <Route path="/contact_us" element={<Contact_us />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Time_table" element={<Time_table/>} />
            <Route path="/Class_message" element={<Class_message  />} />
            <Route path="/Class_attendance" element={<Class_attendance />} />
            <Route path="/ Academic_calendar" element={<Academic_calendar   />} />
            <Route path="/Exam_schedule" element={<Exam_schedule  />} />
            <Route path="/marks" element={<Marks/>} />
            <Route path="/grade" element={<Grade/>} />
            <Route path="/grade_history" element={<Grade_history  />} />
            <Route path="/Library" element={<Library/>} />

          </Routes>
        </div>
      </BrowserRouter>
   



  );
}

export default App;
