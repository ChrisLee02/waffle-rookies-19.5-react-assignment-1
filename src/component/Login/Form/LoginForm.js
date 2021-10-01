import "./LoginForm.css";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {useNetworkContext} from '../../../context/NetworkContext';

const LoginForm = () => {
  const networkContext = useNetworkContext();
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value, // 귀찮으니까...
    });
  };
  const history = useHistory();
  const onClick = () => {
    axios
      .post(
        "https://p04fpgjlo3.execute-api.ap-northeast-2.amazonaws.com/v1/auth/login",
        account
      )
      .then((response) => {
        console.log("성공");
        localStorage.setItem("JWT", response.data.access_token);
        localStorage.setItem("isLogIn", true);
        networkContext.setIsLogIn("true");
        history.push("/students");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <form className={"LoginForm"} action="" name={"IDPW"}>
      <label className={"LoginLabel"} htmlFor={"LogInID"}>
        Username or email address
      </label>
      <input
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
        name={"username"}
        id={"LogInID"}
        type="text"
        onChange={onChangeAccount}
      />
      <label className={"LoginLabel"} htmlFor={"LogInPW"}>
        Password
      </label>
      <input
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
        name={"password"}
        id={"LogInPW"}
        type="password"
        onChange={onChangeAccount}
      />
      <button type={"button"} onClick={onClick} id={"SignIn"}>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
