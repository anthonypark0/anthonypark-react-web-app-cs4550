import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { FormControl } from "react-bootstrap";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      if (!currentUser) {
        alert("Signup failed. Try a different username.");
        return;
      }
      dispatch(setCurrentUser(currentUser));
      navigate("/Kambaz/Account/Profile");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="wd-signup-screen container mt-5">
      <h1 className="mb-4 text-center">Sign up</h1>

      <FormControl
        className="mb-3"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <FormControl
        className="mb-3"
        placeholder="Password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button onClick={signup} className="btn btn-primary w-100 mb-3">
        Sign up
      </button>

      <div className="text-center">
        Already have an account?{" "}
        <Link to="/Kambaz/Account/Signin" className="wd-signin-link">
          Sign in
        </Link>
      </div>
    </div>
  );
}
