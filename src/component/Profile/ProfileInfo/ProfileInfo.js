import "./ProfileInfo.css";

const ProfileInfo = (props) => {

  const emailCut = () => {
    try {
      return props.nowStudentData.email.slice(0, -13);
    } catch (e) {
      return null;
    }
  };


  const setPhoneNum = (e) => {
    // 길이가 4, 9인 시점에서 지우는 중인지/쓰는 중인지로 2차 케이스를 나눔.
    props.setNowStudentData({ ...props.nowStudentData, phone: e.target.value });
    if (e.target.value.length === 4) {
      if (e.target.value[3] === "-") {
        props.setNowStudentData({
          ...props.nowStudentData,
          phone: e.target.value.slice(0, 3),
        });
      } else {
        props.setNowStudentData({
          ...props.nowStudentData,
          phone: e.target.value.slice(0, 3) + "-" + e.target.value[3],
        });
      }
    }
    if (e.target.value.length === 9) {
      if (e.target.value[8] === "-") {
        props.setNowStudentData({
          ...props.nowStudentData,
          phone: e.target.value.slice(0, 8),
        });
      } else {
        props.setNowStudentData({
          ...props.nowStudentData,
          phone: e.target.value.slice(0, 8) + "-" + e.target.value[8],
        });
      }
    }
  };

  return (
    <div className={"ProfileInfo"}>
      <ul className={"Infomation"}>
        <li className={"InfoLine"}>
          전화번호{" "}
          <input
            maxLength="13"
            className={"InfoInput"}
            id={"Phone"}
            value={props.nowStudentData.phone || ""}
            onChange={(e) => {
              setPhoneNum(e);
            }}
          />
        </li>
        <li className={"InfoLine"}>
          이메일{" "}
          <div className={"Shell"}>
            <input
              className={"InfoInput"}
              id={"Email"}
              value={emailCut() || ""}
              onChange={(e) => {
                props.setNowStudentData({
                  ...props.nowStudentData,
                  email: e.target.value + "@waffle.hs.kr",
                });
              }}
            />
          </div>
        </li>
        <li className={"InfoLine"}>
          전공
          <select
            className={"InfoInput"}
            id={"Major"}
            onChange={(e) => {
              props.setNowStudentData({
                ...props.nowStudentData,
                major: e.target.value,
              });
            }}
            value={props.nowStudentData.major || ""}
          >
            <option value="">전공선택</option>
            <option value="frontend">frontend</option>
            <option value="backend">backend</option>
            <option value="android">android</option>
            <option value="iOS">iOS</option>
            <option value="design">design</option>
          </select>
        </li>
        <li className={"InfoLine"} id={"Profile"}>
          프로필{" "}
          <input
            onChange={(e) => {
              props.setNowStudentData({
                ...props.nowStudentData,
                profileImg: e.target.value,
              });
            }}
            className={"InfoInput"}
            value={props.nowStudentData.profileImg || ""}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
