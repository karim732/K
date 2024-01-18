import KSymbol from "../UI/KSymbol";
import Modal from "../UI/Modal";
import classes from "./Login.module.css";
const Login = () => {
  return (
    <>
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
            <input type="text" className="form-control" htmlFor="username" />
          </div>
          <div className={`input-group ${classes["login__input-group"]}`}>
            <span className="input-group-text" id="password">
              Password
            </span>
            <input type="text" className="form-control" htmlFor="password" />
          </div>
          <div>
            <button type="button" className="btn btn-dark w-100 rounded-pill">
              Login
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
