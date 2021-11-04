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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNetworkContext } from "../../context/NetworkContext";

const Students = () => {
  const history = useHistory();
  const studentContext = useStudentContext();
  const networkContext = useNetworkContext();
  const [addModalOpen, setAddModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로
  const [popUpOpen, setPopUpOpen] = useState(); // 모달은 기본값이 꺼진 상태로
  const [gradeSearch, setGradeSearch] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [nowStudentData, setNowStudentData] = useState({
    //현재 선택된 학생의 데이터, id 값만 임의로 부여해둠.
    id: null,
    name: null,
    grade: null,
    profileImg: null,
  });
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
    //선택된 학생 데이터가 바뀌었을 때만 실행
    axios
      .get("/student")
      .then((response) => {
        studentContext.setStudentData(response.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
    if (studentContext.nowStudentID !== null) {
      axios
        .get("/student/" + studentContext.nowStudentID)
        .then((response) => {
          setNowStudentData(response.data);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  }, [studentContext.nowStudentID]);

  useEffect(() => {
    if (networkContext.token === undefined || networkContext.token === "null") {
      history.push("/login");
    }
    axios.get("/auth/check_token").catch((error) => {
      localStorage.setItem("JWT", null);
      networkContext.setToken(undefined);
      toast.error(error.response.data.message);
      history.push("/login");
    });
    if (getCookie("popUpPostpone") === "Y") {
      setPopUpOpen(false);
    } else {
      setPopUpOpen(true);
    }
  }, []);

  return (
    <div className={"Students"}>
      <StudentAddModal
        setNowStudentData={setNowStudentData}
        closeModal={closeAddModal}
        modalOpen={addModalOpen}
      />
      <PopUp popUpOpen={popUpOpen} closePopUp={closePopUp}></PopUp>
      <Header />
      <DashBoard />
      <div className={"Down"}>
        <div className={"Left"}>
          <ControlBar
            nameSearch={nameSearch}
            setNameSearch={setNameSearch}
            gradeSearch={gradeSearch}
            setGradeSearch={setGradeSearch}
          />
          <Table
            setNowStudentData={setNowStudentData}
            nowStudentData={nowStudentData}
          />
          <button className={"AddButton"} onClick={openAddModal}>
            추가
          </button>
        </div>
        <div className={"Right"}>
          <Detail nowStudentData={nowStudentData} />
        </div>
        {/*선택된 학생이 있으면 Detail 표시, 없으면 메세지창을 표시*/}
      </div>
    </div>
  );
};

export default Students;
