import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    sessionStorage.setItem("email", JSON.stringify(email));
  };
  console.log(email);

  return (
    <div className="d-flex justify-content-center ">
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="" />
      </div>
      <div className="register-form d-flex flex-column align-items-center  w-100 ">
        <h1 className="form-title display-3">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary form-control mb-3"
            value="Login"
          />
          <button className="btn btn-primary form-control">
            Countine with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
