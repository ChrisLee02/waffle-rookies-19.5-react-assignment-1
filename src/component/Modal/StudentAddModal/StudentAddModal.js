import "./StudentAddModal.css";
import { useState } from "react";
import { useStudentContext } from "../../../context/StudentsContext";
import axios from "axios";
import { toast } from "react-toastify";

const StudentAddModal = (props) => {
  const studentContext = useStudentContext();
  const open = props.modalOpen;
  const [name, setName] = useState();
  const [grade, setGrade] = useState();
  const onClick = () => {
    axios
      .post("/student", {
        name: name,
        grade: Number(grade),
      })
      .then((response) => {
        props.closeModal();
        studentContext.setNowStudentID(response.data.id);
        //새로고침을 해줘야 리렌더가 일어남.
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "closeModal modal"}>
      {open ? (
        <form onSubmit={(e)=>{
          e.preventDefault();
          onClick();
        }} className={open ? "openModalInside" : "closeModalInside"}>
          <ul className={"ModalContent"}>
            {" "}
            {/*이 부분 코드는 DetailContents 재사용*/}
            <li className={"ModalLine"} id={"Name"}>
              이름{" "}
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={"ModalInput"}
              />
            </li>
            <li className={"ModalLine"} id={"Grade"}>
              학년{" "}
              <input
                onChange={(e) => {
                  setGrade(Number(e.target.value));
                }}
                className={"ModalInput"}
              />
            </li>
          </ul>
          <div className={"Button"}>
            <button className={"close"} type={'button'} onClick={props.closeModal}>
              닫기
            </button>
            <div></div>
            <button className={"add"} type={'submit'}>
              추가
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default StudentAddModal;
