import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KSymbol from "../UI/KSymbol";
import Modal from "../UI/Modal";
import classes from "./Login.module.css";
import { loginAPI } from "../../api/apis";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const { response, error } = await loginAPI({
      body: {
        username: userName,
        password: password,
      },
    });
    if (response?.success) {
      localStorage.setItem("user", userName);
      navigate("/");
    } else {
      setLoginError(true);
    }
  };

  return (
    <Modal>
      <div className={classes.login}>
        <div className="mb-3">
          <h3 className="text-center">
            Sign in to <KSymbol />
          </h3>
        </div>
        <div className={`input-group ${classes["login__input-group"]}`}>
          <span className="input-group-text" id="username">
            Username
          </span>
          <input
            type="text"
            className="form-control"
            htmlFor="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={`input-group ${classes["login__input-group"]}`}>
          <span className="input-group-text" id="password">
            Password
          </span>
          <input
            type="text"
            className="form-control"
            htmlFor="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-dark w-100 rounded-pill"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        {loginError && (
          <h6 className="text-danger mt-3 text-center">Failed to login</h6>
        )}
      </div>
    </Modal>
  );
};

export default Login;
