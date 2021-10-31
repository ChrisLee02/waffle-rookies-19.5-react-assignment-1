import { ReactComponent as UnLock } from "../../Data/UnLocked.svg";
import { ReactComponent as Lock } from "../../Data/Locked.svg";
import { ReactComponent as Delete } from "../../Data/Delete.svg";
import { ReactComponent as Save } from "../../Data/Save.svg";
import styles from "./IDButtons.module.scss";
import axios from "axios";
import { toast } from "react-toastify";

const IDButtons = (props) => {
  return (
    <div className={styles.IDButtons}>
      <button
        onClick={props.controlLock}
        id={props.nowStudentData.locked ? "Unlock" : null}
        className={
          props.nowStudentData.locked ? styles.LockedIdButton : styles.Lock
        }
      >
        {props.nowStudentData.locked ? <UnLock /> : <Lock />}
        {props.nowStudentData.locked ? "해제" : "잠금"}
      </button>
      <button
        disabled={props.nowStudentData.locked}
        onClick={props.openModal}
        className={
          props.nowStudentData.locked ? styles.LockedIdButton : styles.Delete
        }
      >
        <Delete /> 삭제
      </button>
      <button
        onClick={() => {
          axios
            .patch("/student/" + props.nowStudentData.id, {
              profile_img: props.nowStudentData.profile_img,
              email: props.nowStudentData.email,
              phone: props.nowStudentData.phone,
              major: props.nowStudentData.major,
            })
            .then(() => {
              props.commentUpdate();
            })
            .catch((error) => {
              toast(error.response.data.message);
            });
        }}
        disabled={props.nowStudentData.locked}
        className={
          props.nowStudentData.locked ? styles.LockedIdButton : styles.Save
        }
      >
        <Save /> 저장
      </button>
    </div>
  );
};

export default IDButtons;
