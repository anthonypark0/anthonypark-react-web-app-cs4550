import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4">
      <h1 className="mb-3">Profile</h1>

      <Form.Control 
        id="wd-username"
        defaultValue="alice"
        placeholder="Username"
        className="mb-2"
      /><br />

      <Form.Control 
        id="wd-password"
        type="password"
        defaultValue="123"
        placeholder="Password"
        className="mb-2"
      /><br />

      <Form.Control 
        id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-2"
      /><br />

      <Form.Control 
        id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2"
      /><br />

      <Form.Control 
        id="wd-dob"
        type="date"
        defaultValue="2000-01-01"
        className="mb-2"
      /><br />

      <Form.Control 
        id="wd-email"
        type="email"
        defaultValue="alice@wonderland"
        placeholder="Email"
        className="mb-2"
      /><br />

      <Form.Select id="wd-role" defaultValue="FACULTY" className="mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select><br />

      <Link 
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100">
        Sign Out
      </Link>
    </div>
  );
}
