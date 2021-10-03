import "./StudentDeleteModal.css";
import { useStudentContext } from "../../../context/StudentsContext";
import {ReactComponent as Warning} from "../../../Data/Warning.svg";
import {ReactComponent as Delete} from "../../../Data/Delete.svg";
import {ReactComponent as X} from "../../../Data/X.svg";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const StudentDeleteModal = (props) => {
  const open = props.modalOpen;
  const params = useParams();
  const id = params.id;
  const history = useHistory();
  const studentContext = useStudentContext();
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "closeModal modal"}>
      {open ? (
        <div className={open ? "openDelModalInside" : "closeDelModalInside"}>
          <header className={"DeleteHeader"}>
            <Warning width={"55px"} height={"45px"}/>
            <h1 id={"HeaderMessage"}>학생을 삭제합니다</h1>
          </header>

          <h2 className={"DeleteBody"}>이 작업은 되돌릴 수 없습니다.</h2>

          <div className={"DelButton"}>
            <button className={"DeleteClose"} onClick={props.closeModal}>
              <X/>
              닫기
            </button>
            <button
              onClick={() => {
                axios
                  .delete(
                    "/student/" + id,
                  )
                  .then((response) => {
                    props.closeModal();
                    history.push("/students"); //새로고침을 해줘야 리렌더가 일어남.
                  })
                  .catch((error) => {
                    toast.error(error.response.data.message);
                  });
                  studentContext.setNowStudentID(null);
              }}
              className={"IdButton Delete"}
            >
              {" "}
              <Delete/>
              삭제
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StudentDeleteModal;
