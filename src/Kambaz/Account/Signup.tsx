import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, Button } from "react-bootstrap"; 
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      
      dispatch(setCurrentUser(currentUser));

      navigate("/Kambaz/Account/Profile");
    } catch (error) {
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && <p className="error-message">{error}</p>} 
      <FormControl
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username b-2"
        placeholder="Username"
      />
      <FormControl
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2"
        placeholder="Password"
        type="password"
      />
      <Button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100">
        Sign up
      </Button>
      <br />
      <Link to="/Kambaz/Account/Signin" className="wd-signin-link">
        Already have an account? Sign in
      </Link>
    </div>
  );
}
