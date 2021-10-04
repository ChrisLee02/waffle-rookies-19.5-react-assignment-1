import "./LoginHeader.css";
import { ReactComponent as Waffle } from "../../../Data/Waffle.svg";

const LoginHeader = () => {
  return (
    <header className={"LoginHeader"}>
      <a href={"https://wafflestudio.com"} target={"_blank"}>
        <Waffle height={"150"} width={"150"} />
      </a>
      <h1 id={"LoginTitle"}>Sign in to Waffle</h1>
    </header>
  );
};

export default LoginHeader;
