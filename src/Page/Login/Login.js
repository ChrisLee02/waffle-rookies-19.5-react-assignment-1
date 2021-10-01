import "./Login.css";
import LoginHeader from "../../component/Login/Header/LoginHeader";
import LoginForm from "../../component/Login/Form/LoginForm";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("isLogIn") === "true") {
      history.push("/students");
    }
  }, []);
  return (
    <div>
      <div className={"Login"}>
        <LoginHeader></LoginHeader>
        <LoginForm></LoginForm>
        <p className={"LoginFoot"}>
          New to Waffle?
          <a href="">Create an account</a>.
        </p>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Login;
