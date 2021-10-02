import "./StudentID.css";
import IDHeader from "../../component/Header/IDHeader";
import { useStudentContext } from "../../context/StudentsContext";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import IDButtons from "../../component/Buttons/Buttons";
import RoughProfile from "../../component/Profile/RoughProfile/RoughProfile";
import ProfileInfo from "../../component/Profile/ProfileInfo/ProfileInfo";
import Comment from "../../component/Comment/Comment";
import StudentDeleteModal from "../../component/Modal/StudentDeleteModal/StudentDeleteModal";
import LockedProfileInfo from "../../component/Profile/LockedProfileInfo/LockedProfileInfo";
import LockedButtons from "../../component/Buttons/LockedButtons";
import axios from "axios";
import NoComment from "../../component/Comment/NoComment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNetworkContext } from "../../context/NetworkContext";

const StudentID = () => {
  const studentContext = useStudentContext();
  const networkContext = useNetworkContext();
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로
  const [comments, setComments] = useState([]);

  const openModal = () => {
    //제목이 곧 내용
    setModalOpen(true);
  };
  const closeModal = () => {
    //제목이 곧 내용
    setModalOpen(false);
  };
  const params = useParams();
  const id = params.id;
  const date = require("dayjs");

  const commentUpdate = () => {
    axios
      .get(
        networkContext.baseURL + "/student/" + id + "/comment",
        networkContext.config
      )
      .then((response) => {
        console.log(response.data);
        setComments(
          response.data.map((comment) => {
            return (
              <li className={"Comment"}>
                <div>{comment.content}</div>
                <span>
                  {date(comment.datetime).format("YYYY-MM-DD HH:mm:ss")}
                  {/*{comment.datetime.slice(0, 4) +
                    "년 " +
                    comment.datetime.slice(5, 7) +
                    "월 " +
                    comment.datetime.slice(8, 10) +
                    "일 " +
                    (Number(comment.datetime.slice(11, 13)) + 9).toString() +
                    "시 " +
                    comment.datetime.slice(14, 16) +
                    "분"} 아.. */}
                </span>
              </li>
            );
          })
        );
      });
  };

  const controlLock = () => {
    if (studentContext.nowStudentData.locked) {
      axios
        .post(
          networkContext.baseURL + "/student/" + id + "/unlock",
          studentContext.nowStudentData,
          networkContext.config
        )
        .then((response) =>
          studentContext.setNowStudentData({
            ...studentContext.nowStudentData,
            locked: false,
          })
        )
        .then(() => commentUpdate())
        .catch((response) => window.alert("실패"));
    } else {
      axios
        .post(
          networkContext.baseURL + "/student/" + id + "/lock",
          studentContext.nowStudentData,
          networkContext.config
        )
        .then((response) =>
          studentContext.setNowStudentData({
            ...studentContext.nowStudentData,
            locked: true,
          })
        )
        .then(() => commentUpdate())
        .catch((response) => window.alert("실패"));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isLogIn") !== "true") {
      history.push("/login");
    }
    axios
      .get(networkContext.baseURL + "/student/" + id, networkContext.config)
      .then((response) => {
        console.log("ID 성공");
        studentContext.setNowStudentData(response.data);
      })
      .catch((response) => {
        window.alert("ID 실패");
        history.push("/students");
      });
    commentUpdate();
  }, []);

  return (
    <div className={"StudentID"}>
      <StudentDeleteModal
        history={history}
        closeModal={closeModal}
        modalOpen={modalOpen}
      />
      <IDHeader history={history} />
      <div className={"IDDown"}>
        <div className={"IDLeft"}>
          <RoughProfile></RoughProfile>
          <div className={"IDTitle"}>정보</div>
          {studentContext.nowStudentData.locked ? (
            <LockedProfileInfo></LockedProfileInfo>
          ) : (
            <ProfileInfo></ProfileInfo>
          )}
        </div>
        <div className={"IDRight"}>
          {studentContext.nowStudentData.locked ? (
            <LockedButtons controlLock={controlLock} />
          ) : (
            <IDButtons
              commentUpdate={commentUpdate}
              controlLock={controlLock}
              openModal={openModal}
            />
          )}
          <div className={"IDTitle"}>코멘트</div>
          {comments.length === 0 ? (
            <NoComment
              commentUpdate={commentUpdate}
              setComments={setComments}
            />
          ) : (
            <Comment
              setComments={setComments}
              commentUpdate={commentUpdate}
              comments={comments}
            />
          )}
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default StudentID;
