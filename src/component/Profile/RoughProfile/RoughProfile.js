import "./RoughProfile.css";

const RoughProfile = (props) => {
  return (
    <div className={"RoughProfile"}>
      <img
        id={"ProfileImg"}
        src={props.nowStudentData.profileImg || ""}
        alt="No Image"
      />
      <ul className={"NameNGrade"}>
        <li className={"IDLine"}>
          이름{" "}
          <input
            disabled={true}
            className={"IDInput"}
            id={"IDName"}
            value={props.nowStudentData.name || ""}
          />
        </li>
        <li className={"IDLine"}>
          학년{" "}
          <input
            disabled={true}
            className={"IDInput"}
            id={"IDGrade"}
            value={props.nowStudentData.grade || ""}
          />
        </li>
      </ul>
    </div>
  );
};

export default RoughProfile;
