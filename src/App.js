import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddStudent from "./AddStudents";
import UpdateProduct from "./UpdateProduct";

import AddProduct from "./AddProduct";

import ProductList from "./ProductList";

import StudentRegister from "./StudentRegister";

import StudentLogin from "./StudentLogin";

import TeacherRegister from "./TeacherRegister";
import TeacherLogin from "./TeacherLogin";

import StudentPage from "./StudentPage";

import TeacherPage from "./TeacherPage";

import TeacherHeader from "./TeacherHeader";
import Schedule from "./Schedule";

import AppointmentStatus from "./AppointmentStatus";

import ScheduleList from "./ScheduleList";

import TeacherAppointmentOperation from "./TeacherAppointmentOperation";

import UpdateAppointment from "./UpdateAppointment";

import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";

import StudentList from "./StudentList";
import TeacherList from "./TeacherList";

import StudentUpdate from "./StudentUpdate";

import TeacherUpdate from "./TeacherUpdate";

import StudentTodaysAppointment from "./StudentTodaysAppointment";

import TeacherTodaysAppointment from "./TeacherTodaysAppointment";

import AdminAddStudent from "./AdminAddStudent";

import AdminAddTeacher from "./AdminAddTeacher";

import RequsetStudentRegistration from "./RequsetStudentRegistration";

import RequestTeacherRegistration from "./RequestTeacherRegistration";

import ViewDepartment from "./ViewDepartment";

import ViewSubject from "./ViewSubject";

import ViewTeacher from "./ViewTeacher";

import AdminUpdateStudent from "./AdminUpdateStudent";

import AdminUpdateTeacher from "./AdminUpdateTeacher";

import AppointmentRequestList from "./AppointmentRequestList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/studentRegister" element={<StudentRegister />} />
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/teacherRegister" element={<TeacherRegister />} />
          <Route path="/studentPage" element={<StudentPage />} />
          <Route path="/teacherPage" element={<TeacherPage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/scheduleList" element={<ScheduleList />} />

          <Route
            path="/adminUpdateStudent/:id"
            element={<AdminUpdateStudent />}
          />

          <Route
            path="/adminUpdateTeacher/:id"
            element={<AdminUpdateTeacher />}
          />
          <Route
            path="/appointmentRequestList"
            element={<AppointmentRequestList />}
          />
          <Route
            path="/teacherAppointmentOperation"
            element={<TeacherAppointmentOperation />}
          />
          <Route
            path="/updateAppointment/:id"
            element={<UpdateAppointment />}
          />

          <Route path="/viewSubject/:department" element={<ViewSubject />} />

          <Route path="/viewTeacher/:subject" element={<ViewTeacher />} />
          <Route
            path="/studentTodaysAppointment"
            element={<StudentTodaysAppointment />}
          />
          <Route
            path="/teacherTodaysAppointment"
            element={<TeacherTodaysAppointment />}
          />
          <Route
            path="/requsetStudentRegistration"
            element={<RequsetStudentRegistration />}
          />
          <Route
            path="/requestTeacherRegistration"
            element={<RequestTeacherRegistration />}
          />
          <Route path="/viewDepartment" element={<ViewDepartment />} />
          <Route path="/adminAddStudent" element={<AdminAddStudent />} />
          <Route path="/adminAddTeacher" element={<AdminAddTeacher />} />
          <Route path="/studentUpdate" element={<StudentUpdate />} />
          <Route path="/teacherUpdate" element={<TeacherUpdate />} />
          <Route path="/teacherList" element={<TeacherList />} />
          <Route path="/studentList" element={<StudentList />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/appointmentStatus" element={<AppointmentStatus />} />
          <Route path="/teacherLogin" element={<TeacherLogin />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
