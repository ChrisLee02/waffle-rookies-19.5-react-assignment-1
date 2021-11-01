//import "./Header.css";
import { ReactComponent as Waffle } from "../../Data/Waffle.svg";
import { useHistory } from "react-router-dom";
import { useNetworkContext } from "../../context/NetworkContext";
import styled from "styled-components";

const HeaderComponent = styled.header`
  display: flex;
  height: 76px;
  top: 34px;
  justify-content: space-between;
`;

const HeaderLeft = styled.span`
  display: flex;
`;

const Title = styled.h1`
  height: 31px;
  margin-left: 22px;
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
`;

const LogOut = styled.button`
  color: rgba(0, 0, 0, 0.87);
  background-color: #e0e0e0;
  height: 80%;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: darkgrey;
  }
`;

const Header = () => {
  const networkContext = useNetworkContext();
  const history = useHistory();
  return (
    <HeaderComponent>
      <HeaderLeft>
        <a href={"https://wafflestudio.com"} target={"_blank"}>
          <Waffle height={"58"} width={"54"} />
        </a>
        <Title>와플고등학교 명단 관리 프로그램</Title>
      </HeaderLeft>
      <LogOut
        onClick={() => {
          localStorage.setItem("JWT", null);
          networkContext.setToken(undefined);
          history.push("/login");
        }}
      >
        로그아웃
      </LogOut>
    </HeaderComponent>
  );
};

export default Header;
