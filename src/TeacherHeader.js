import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function TeacherHeader() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Teacher System</Navbar.Brand>
        <Nav className="me-auto navbar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/schedule">Create Appoitment</Link>

              <Link to="/appointmentRequestList">Appoitment Request</Link>

              <Link to="/teacherAppointmentOperation">My Appointment</Link>

              <Link to="/TeacherUpdate">Update Profile</Link>

              <Link to="/teacherTodaysAppointment">Upcoming Appointment</Link>
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

export default TeacherHeader;
