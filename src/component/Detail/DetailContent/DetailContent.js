import "./DetailContent.css";
import { useStudentContext } from "../../../context/StudentsContext";

const DetailContent = (props) => {
  const context = useStudentContext();
  return (
    <ul className={"DetailContent"}>
      <li className={"Line"}>
        이름{" "}
        <input
          disabled={true}
          className={"DetailInput"}
          value={props.nowStudentData.name}
        />
      </li>
      <li className={"Line"}>
        학년{" "}
        <input
          disabled={true}
          className={"DetailInput"}
          value={props.nowStudentData.grade}
        />
      </li>
    </ul>
  );
};

export default DetailContent;
