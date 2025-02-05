import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4">
      <h1 className="mb-3">Sign Up</h1>
      
      <Form.Control
        id="wd-username"
        placeholder="Username"
        className="mb-2"
      /><br />
      
      <Form.Control
        id="wd-password"
        type="password"
        placeholder="Password"
        className="mb-2"
      /><br />
      
      <Form.Control
        id="wd-password-verify"
        type="password"
        placeholder="Verify Password"
        className="mb-3"
      /><br />

      <Link 
        id="wd-signup-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2">
        Sign Up
      </Link><br />

      <p>
        <Link id="wd-signin-link" to="/Kambaz/Account/Signin" className="ms-1">
          Sign in
        </Link>
      </p>
    </div>
  );
}
