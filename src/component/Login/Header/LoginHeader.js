//import "./LoginHeader.css";
import { ReactComponent as Waffle } from "../../../Data/Waffle.svg";
import styled from 'styled-components';

const Header = styled.header`
  margin-top: 100px;
  display: grid;
  justify-items: center;
`;
const Title = styled.h1`
  height: 31px;
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
`;

const LoginHeader = () => {
  return (
    <Header>
      <a href={"https://wafflestudio.com"} target={"_blank"}>
        <Waffle height={"150"} width={"150"} />
      </a>
      <Title>Sign in to Waffle</Title>
    </Header>
  );
};

export default LoginHeader;
