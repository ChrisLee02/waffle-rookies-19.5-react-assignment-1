import "./TableHeader.css";
import styled from "styled-components";

const TableHeaderComponent = styled.div`
  height: 59px;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr 5fr 1fr;
  background-color: #ececec;
`;

const HName = styled.div`
  font-size: 20px;
  margin-top: 15px;
  height: 23px;
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  line-height: 23px;
  text-align: center;
`;
const HGrade = styled.div`
  font-size: 20px;
  margin-top: 15px;
  height: 23px;
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  line-height: 23px;
  text-align: center;
`;

const TableHeader = () => {
  return (
    <TableHeaderComponent>
      <HName>이름</HName>
      <HGrade>학년</HGrade>
    </TableHeaderComponent>
  );
};

export default TableHeader;
