import Lock from "../../Data/UnLocked.svg";
import Delete from "../../Data/Delete.svg";
import Save from "../../Data/Save.svg";
import "./Buttons.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNetworkContext } from "../../context/NetworkContext";
import { useStudentContext } from "../../context/StudentsContext";

const IDButtons = (props) => {
  const studentContext = useStudentContext();
  const networkContext = useNetworkContext();
  return (
    <div className={"IDButtons"}>
      <button onClick={props.controlLock} className={"IdButton Lock"}>
        <img alt="" src={Lock} />
        잠금
      </button>
      <button onClick={props.openModal} className={"IdButton Delete"}>
        <img alt="" src={Delete} /> 삭제
      </button>
      <button
        onClick={() => {
          axios
            .patch(
              networkContext.baseURL +
                "/student/" +
                studentContext.nowStudentData.id.toString(),
              {
                profile_img: studentContext.nowStudentData.profile_img,
                email: studentContext.nowStudentData.email,
                phone: studentContext.nowStudentData.phone,
                major: studentContext.nowStudentData.major,
              },
              networkContext.config
            )
            .then(() => {
              props.commentUpdate();
            })
            .catch((error) => {
              toast(error.response.data.message);
            });
        }}
        className={"IdButton Save"}
      >
        <img alt="" src={Save} /> 저장
      </button>
    </div>
  );
};

export default IDButtons;
