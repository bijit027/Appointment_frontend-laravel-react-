import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function StudentHeader() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Student System</Navbar.Brand>
        <Nav className="me-auto navbar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/scheduleList">Get Appointment</Link>

              <Link to="/appointmentStatus">Appointment Status</Link>

              <Link to="/studentUpdate"> Update Profile</Link>

              <Link to="/studentTodaysAppointment"> Upcoming Appointment</Link>

              <Link to="/viewDepartment"> View Department</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login </Link>
              <Link to="/register">Register </Link>
              <Link to="/studentRegister">Student Register</Link>

              <Link to="/studentLogin">Student Login</Link>
              <Link to="/teacherRegister">Teacher Register</Link>

              <Link to="/teacherLogin">Teache Login</Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}

export default StudentHeader;
