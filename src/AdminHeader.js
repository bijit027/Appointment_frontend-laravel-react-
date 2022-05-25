import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AdminHeader() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Admin System</Navbar.Brand>
        <Nav className="me-auto navbar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/adminAddStudent">Add Student</Link>

              <Link to="/adminAddTeacher">Add Teacher</Link>

              <Link to="/studentList">Student List</Link>

              <Link to="/teacherList">Teacher List</Link>

              <Link to="/requsetStudentRegistration">Student Request</Link>

              <Link to="/requestTeacherRegistration">Teacher Request</Link>
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

export default AdminHeader;
