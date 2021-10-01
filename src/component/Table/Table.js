import "./Table.css";
import TableHeader from "./TableHeader/TableHeader";
import TableContent from "./TableContent/TableContent";
import { useStudentContext } from "../../context/StudentsContext";
import NoTableContents from "./NoTableContents/NoTableContents";

const Table = (props) => {
  const context = useStudentContext();
  const TableContents = context.studentData
    .filter((student) => student.name.includes(props.search))
    .map((student) => {
      return (
        <TableContent // 현재 학생의 테이블 내용
          selected={student.id === context.nowStudentData.id}
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
