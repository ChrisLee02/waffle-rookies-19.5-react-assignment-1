import "./Header.css";
import Waffle from "../../Data/Waffle.svg";
import { useHistory } from "react-router-dom";
import { useNetworkContext } from "../../context/NetworkContext";
const Header = () => {
  const networkContext = useNetworkContext();
  const history = useHistory();
  return (
    <header className={"Header"}>
      <span className={"HeaderLeft"}>
        <a href={"https://wafflestudio.com"} target={"_blank"}>
          <img alt="" src={Waffle} height={"58"} width={"54"} />
        </a>
        <h1 id={"Title"}>와플고등학교 명단 관리 프로그램</h1>
      </span>
      <button
        className={"LogOut"}
        onClick={() => {
          localStorage.setItem("JWT", null);
          localStorage.setItem("isLogIn", false);
          networkContext.setIsLogIn("false");
          history.push("/login");
        }}
      >
        로그아웃
      </button>
    </header>
  );
};

export default Header;
