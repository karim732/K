import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KSymbol from "../UI/KSymbol";
import Modal from "../UI/Modal";
import classes from "./Login.module.css";
import { loginAPI, registerAPI } from "../../api/apis";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signMessage, setSignMessage] = useState(null);
  const navigate = useNavigate();
  const signHandler = async (api) => {
    try {
      const { response, error } = await api({
        body: {
          username: userName,
          password: password,
        },
      });
      if (error) {
        throw error;
      }
      return response;
    } catch (err) {
      return {
        success: false,
        message:
          err?.response?.data?.message ||
          err?.message ||
          "Something went wrong",
      };
    } finally {
      setUserName("");
      setPassword("");
    }
  };
  const showMessage = (type, message) => {
    setSignMessage({ type, message });
    setTimeout(() => setSignMessage(null), 3000);
  };
  const handleSign = async (type) => {
    const api = type === "login" ? loginAPI : registerAPI;
    const response = await signHandler(api);
    if (response.success) {
      if (type === "login") {
        localStorage.setItem("user", userName);
        navigate("/");
      }
      showMessage("success", response?.message);
    } else {
      showMessage("error", response?.message || "Something went wrong");
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
            type="password"
            className="form-control"
            htmlFor="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-dark flex-grow-1 rounded-pill"
            onClick={() => handleSign("login")}
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-outline-dark rounded-pill"
            onClick={() => handleSign("register")}
          >
            Register
          </button>
        </div>
        {signMessage && (
          <h6
            className={`text-${signMessage?.type === "error" ? "danger" : "success"} mt-3 text-center`}
          >
            {signMessage?.message}
          </h6>
        )}
      </div>
    </Modal>
  );
};

export default Login;
