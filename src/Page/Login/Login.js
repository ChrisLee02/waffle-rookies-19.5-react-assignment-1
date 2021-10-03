import "./Login.css";
import LoginHeader from "../../component/Login/Header/LoginHeader";
import LoginForm from "../../component/Login/Form/LoginForm";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import {useNetworkContext} from '../../context/NetworkContext';



const Login = () => {
  const history = useHistory();
  const networkContext = useNetworkContext();
  useEffect(() => {
    if (networkContext.token !== undefined && networkContext.token !== 'null') {
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

    </div>
  );
};

export default Login;
