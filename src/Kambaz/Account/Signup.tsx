import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { setCurrentUser } from "./reducer";
import * as db from "../Database";

export default function Signup() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = () => {
    const { username, password, verifyPassword } = credentials;

    if (!username || !password || !verifyPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== verifyPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUser = db.users.find((u: any) => u.username === username);
    if (existingUser) {
      setError("Username already taken.");
      return;
    }

    const newUser = {
      _id: Date.now().toString(),         // or use some unique ID logic
      username,
      password,
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      role: "USER",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
    };

    db.users.push(newUser); // Save user in local db
    dispatch(setCurrentUser(newUser));   // Log them in
    navigate("/Kambaz/Dashboard");       // Redirect
  };

  return (
    <div id="wd-signup-screen" className="p-4">
      <h1 className="mb-3">Sign Up</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <Form.Control
        id="wd-username"
        placeholder="Username"
        className="mb-2"
        value={credentials.username || ""}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <Form.Control
        id="wd-password"
        type="password"
        placeholder="Password"
        className="mb-2"
        value={credentials.password || ""}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <Form.Control
        id="wd-password-verify"
        type="password"
        placeholder="Verify Password"
        className="mb-3"
        value={credentials.verifyPassword || ""}
        onChange={(e) =>
          setCredentials({ ...credentials, verifyPassword: e.target.value })
        }
      />
      <Button
        id="wd-signup-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signup}
      >
        Sign Up
      </Button>

      <p>
        Already have an account?
        <Link id="wd-signin-link" to="/Kambaz/Account/Signin" className="ms-1">
          Sign in
        </Link>
      </p>
    </div>
  );
}
