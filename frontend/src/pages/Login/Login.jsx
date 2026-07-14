import { useState } from "react";
import assets from "../../assets/assets";
import "./Login.css";

function Login() {
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className="login">
      <img src={assets.logo_big} className="logo" />

      <form className="login-form">
        <h2>{currState}</h2>
        {currState === "Login" ? null : (
          <input
            type="text"
            placeholder="username"
            className="form-input"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />

        <button type="submit">Sign up</button>
        <div className="login-term">
          <input type="checkbox" name="" className="" />
          <p>Agree To the Term of use & privacy policy.</p>
        </div>

        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>Login</span>{" "}
            </p>
          ) : (
            <p className="login-toggle">
              Create a new Account{" "}
              <span onClick={() => setCurrState("Sign up")}>Sign up</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
