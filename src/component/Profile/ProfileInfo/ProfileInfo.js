import "./ProfileInfo.css";
import { useStudentContext } from "../../../context/Context";

const ProfileInfo = () => {
  const context = useStudentContext();

  const emailCut = () => {
    try {
      return context.nowStudentData.email.slice(0, -13);
    } catch (e) {
      return null;
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
            value={context.nowStudentData.phone || ""}
            onChange={(e) => {
              context.setPhoneNum(e);
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
                //                   context.nowStudentData.email
                context.setNowStudentData({
                  ...context.nowStudentData,
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
              context.setNowStudentData({
                ...context.nowStudentData,
                major: e.target.value,
              });
            }}
            value={context.nowStudentData.major || ""}
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
              context.setNowStudentData({
                ...context.nowStudentData,
                profileImg: e.target.value,
              });
            }}
            className={"InfoInput"}
            value={context.nowStudentData.profileImg || ""}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
