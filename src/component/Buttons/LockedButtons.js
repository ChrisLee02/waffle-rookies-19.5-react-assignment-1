import Lock from "../../Data/Locked.svg";
import Delete from "../../Data/Delete.svg";
import Save from "../../Data/Save.svg";
import "./Buttons.css";

const LockedIDButtons = (props) => {
  return (
    <div className={"IDButtons"}>
      <button
        onClick={props.controlLock}
        id={"Unlock"}
        className={"LockedIdButton"}
      >
        <img alt="" src={Lock} />
        해제
      </button>
      <button disabled={true} className={"LockedIdButton"}>
        <img alt="" src={Delete} /> 삭제
      </button>
      <button disabled={true} className={"LockedIdButton"}>
        <img alt="" src={Save} /> 저장
      </button>
    </div>
  );
};

export default LockedIDButtons;
