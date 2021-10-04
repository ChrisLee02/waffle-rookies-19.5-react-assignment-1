import "./LoginForm.css";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNetworkContext } from "../../../context/NetworkContext";

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
      .post("/auth/login", account)
      .then((response) => {
        console.log("성공");
        localStorage.setItem("JWT", response.data.access_token);
        networkContext.setToken(response.data.access_token);
        history.push("/students");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={"LoginForm"}
      action=""
      name={"IDPW"}
    >
      <label className={"LoginLabel"} htmlFor={"LogInID"}>
        Username or email address
      </label>
      <input
        name={"username"}
        id={"LogInID"}
        type="text"
        onChange={onChangeAccount}
      />
      <label className={"LoginLabel"} htmlFor={"LogInPW"}>
        Password
      </label>
      <input
        name={"password"}
        id={"LogInPW"}
        type="password"
        onChange={onChangeAccount}
      />
      <button type={"submit"} onClick={onClick} id={"SignIn"}>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
