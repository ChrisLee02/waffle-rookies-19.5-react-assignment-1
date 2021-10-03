import "./LockedProfileInfo.css";
import { ReactComponent as Locked } from "../../../Data/Locked.svg";

const LockedProfileInfo = (props) => {
  return (
    <div className={"LockedProfileInfo"}>
      <ul className={"Infomation"}>
        <li className={"InfoLine"}>
          전화번호{" "}
          <input
            disabled={true}
            className={"InfoInput"}
            id={"Phone"}
            value={props.nowStudentData.phone || ""}
          />
        </li>

        <li className={"InfoLine"}>
          이메일{" "}
          <div className={"Shell"}>
            <input
              className={"InfoInput"}
              id={"Email"}
              disabled={true}
              value={props.nowStudentData.email || ""}
            />
          </div>
        </li>

        <li className={"InfoLine"}>
          전공
          <select
            disabled={true}
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
            disabled={true}
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
      <Locked width={"100px"} height={"100px"} />
    </div>
  );
};

export default LockedProfileInfo;
