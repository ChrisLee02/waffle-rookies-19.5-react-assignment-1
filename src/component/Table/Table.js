import "./Table.css";
import TableHeader from "./TableHeader/TableHeader";
import TableContent from "./TableContent/TableContent";
import { useStudentContext } from "../../context/StudentsContext";
import NoTableContents from "./NoTableContents/NoTableContents";

const Table = (props) => {
  const context = useStudentContext();
  const params = new URLSearchParams(document.location.search.substring(1));
  const TableContents = context.studentData
    .filter(
      (student) =>
        params.get("name") === "" ||
        params.get("name") === null ||
        student.name.includes(params.get("name"))
    )
    .filter(
      (student) =>
        params.get("grade") === "" ||
        params.get("grade") === null ||
        student.grade === Number(params.get("grade"))
    )
    .map((student) => {
      return (
        <TableContent // 현재 학생의 테이블 내용
          setNowStudentData={props.setNowStudentData}
          selected={student.id === props.nowStudentData.id}
          student={student}
          key={student.id}
        ></TableContent> // selected 값을 참으로 전달
      );
    });

  return (
    <div className={"Table"}>
      <TableHeader></TableHeader>
      {context.studentData.length === 0 ? <NoTableContents /> : TableContents}
    </div>
  );
};

export default Table;
