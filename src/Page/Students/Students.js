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
import PopUp from "../../component/Modal/PopUp/PopUp";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNetworkContext } from "../../context/NetworkContext";

const Students = () => {
  const history = useHistory();
  const studentContext = useStudentContext();
  const networkContext = useNetworkContext();
  const [addModalOpen, setAddModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로
  const [popUpOpen, setPopUpOpen] = useState(); // 모달은 기본값이 꺼진 상태로
  const [search, setSearch] = useState(""); //검색창 입력 값 받아옴
  const openAddModal = () => {
    //제목이 곧 내용
    setAddModalOpen(true);
  };
  const closeAddModal = () => {
    //제목이 곧 내용
    setAddModalOpen(false);
  };

  const getCookie = (cookie_name) => {
    let x, y;
    const val = document.cookie.split(";");

    for (let i = 0; i < val.length; i++) {
      x = val[i].substr(0, val[i].indexOf("="));
      y = val[i].substr(val[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, ""); // 앞과 뒤의 공백 제거하기
      if (x === cookie_name) {
        return unescape(y); // unescape로 디코딩 후 값 리턴
      }
    }
  };
  const closePopUp = () => {
    //제목이 곧 내용
    setPopUpOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("isLogIn") !== "true") {
      history.push("/login");
    }
    axios
      .get(networkContext.baseURL + "/student", networkContext.config)
      .then((response) => {
        studentContext.setStudentData(response.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });

    if (getCookie("popUpPostpone") === "Y") {
      setPopUpOpen(false);
    } else {
      setPopUpOpen(true);
    }
  }, []);

  return (
    <div className={"Students"}>
      <StudentAddModal closeModal={closeAddModal} modalOpen={addModalOpen} />
      <PopUp popUpOpen={popUpOpen} closePopUp={closePopUp}></PopUp>
      <Header />
      <DashBoard />
      <div className={"Down"}>
        <div className={"Left"}>
          <ControlBar
            search={search}
            setSearch={setSearch}
            openModal={openAddModal}
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
