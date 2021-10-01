import "./RoughProfile.css";
import { useStudentContext } from "../../../context/Context";

const RoughProfile = () => {
  const context = useStudentContext();
  return (
    <div className={"RoughProfile"}>
      <img
        id={"ProfileImg"}
        src={context.nowStudentData.profileImg || ""}
        alt="No Image"
      />
      <ul className={"NameNGrade"}>
        <li className={"IDLine"}>
          이름{" "}
          <input
            disabled={true}
            className={"IDInput"}
            id={"IDName"}
            value={context.nowStudentData.name || ""}
          />
        </li>
        <li className={"IDLine"}>
          학년{" "}
          <input
            disabled={true}
            className={"IDInput"}
            id={"IDGrade"}
            value={context.nowStudentData.grade || ""}
          />
        </li>
      </ul>
    </div>
  );
};

export default RoughProfile;
