import { useContext, createContext, useState } from "react";

const studentContext = createContext();

export const StudentContextProvider = ({ children }) => {
  const [studentData, setStudentData] = useState(
    []
  ); /*더미 데이터로 학생 데이터 초기화*/
  const [nowStudentData, setNowStudentData] = useState({
    //현재 선택된 학생의 데이터, id 값만 임의로 부여해둠.
    id: null,
    name: null,
    grade: null,
    profileImg: null,
    email: "",
    phone: "",
    major: "",
    locked: false,
  });
  const [isLogIn, setIsLogIn] = useState();

  const baseURL =
    "https://p04fpgjlo3.execute-api.ap-northeast-2.amazonaws.com/v1";
  const config = {
    headers: { Authorization: `Bearer ${localStorage.JWT}` },
  };
  const setPhoneNum = (e) => {
    // 길이가 4, 9인 시점에서 지우는 중인지/쓰는 중인지로 2차 케이스를 나눔.
    setNowStudentData({ ...nowStudentData, phone: e.target.value });
    if (e.target.value.length === 4) {
      if (e.target.value[3] === "-") {
        setNowStudentData({
          ...nowStudentData,
          phone: e.target.value.slice(0, 3),
        });
      } else {
        setNowStudentData({
          ...nowStudentData,
          phone: e.target.value.slice(0, 3) + "-" + e.target.value[3],
        });
      }
    }
    if (e.target.value.length === 9) {
      if (e.target.value[8] === "-") {
        setNowStudentData({
          ...nowStudentData,
          phone: e.target.value.slice(0, 8),
        });
      } else {
        setNowStudentData({
          ...nowStudentData,
          phone: e.target.value.slice(0, 8) + "-" + e.target.value[8],
        });
      }
    }
  };

  return (
    <studentContext.Provider
      value={{
        studentData,
        setStudentData,
        nowStudentData,
        setNowStudentData,
        isLogIn,
        setIsLogIn,
        setPhoneNum,
        baseURL,
        config,
      }}
    >
      {children}
    </studentContext.Provider>
  );
};

export const useStudentContext = () => useContext(studentContext);
