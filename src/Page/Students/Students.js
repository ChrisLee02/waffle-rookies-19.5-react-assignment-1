import "./Students.css";
import Header from "../../component/Header/Header";
import DashBoard from "../../component/DashBoard/DashBoard";
import ControlBar from "../../component/ControlBar/ControlBar";
import Table from "../../component/Table/Table";
import Detail from "../../component/Detail/Detail";
import { useEffect, useState } from "react";
import DetailNotSelected from "../../component/Detail/DetailNotSelected";
import StudentAddModal from "../../component/Modal/StudentAddModal/StudentAddModal";
import { useStudentContext } from "../../context/StudentsContext";

import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Students = () => {
  const history = useHistory();
  const studentContext = useStudentContext();
  const [modalOpen, setModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로
  const [search, setSearch] = useState(""); //검색창 입력 값 받아옴
  const openModal = () => {
    //제목이 곧 내용
    setModalOpen(true);
  };
  const closeModal = () => {
    //제목이 곧 내용
    setModalOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("isLogIn") !== "true") {
      history.push("/login");
    }
  }, []);

  return (
    <div className={"Students"}>
      <StudentAddModal closeModal={closeModal} modalOpen={modalOpen} />
      <Header />
      <DashBoard />
      <div className={"Down"}>
        <div className={"Left"}>
          <ControlBar
            search={search}
            setSearch={setSearch}
            openModal={openModal}
          />
          <Table search={search} />
        </div>
        <div className={"Right"}>
          {studentContext.nowStudentData.id === null ? (
            <DetailNotSelected /> //현재 선택된 학생이 있는지 판단
          ) : (
            <Detail />
          )}
        </div>
        {/*선택된 학생이 있으면 Detail 표시, 없으면 메세지창을 표시*/}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Students;
