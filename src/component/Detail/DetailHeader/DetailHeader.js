import "./DetailHeader.css";
import { useStudentContext } from "../../../context/StudentsContext";
import { ReactComponent as Image } from "../../../Data/PageMove.svg";
import { useHistory } from "react-router-dom";

const DetailHeader = (props) => {
  const history = useHistory();
  return (
    <div className={"DetailHeader"}>
      <div></div>
      <button
        onClick={() => {
          history.push("/students/" + props.nowStudentData.id);
        }}
        id={"GoDetail"}
      >
        <Image />
      </button>
    </div>
  );
};

export default DetailHeader;
