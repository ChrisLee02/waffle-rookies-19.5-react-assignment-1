import "./LoginHeader.css";
import Waffle from "../../../Data/Waffle.svg";

const LoginHeader = () => {
  return (
    <header className={"LoginHeader"}>
      <a href={"https://wafflestudio.com"} target={"_blank"}>
        <img src={Waffle} height={"150"} width={"150"} />
      </a>
      <h1 id={"LoginTitle"}>Sign in to Waffle</h1>
    </header>
  );
};

export default LoginHeader;
