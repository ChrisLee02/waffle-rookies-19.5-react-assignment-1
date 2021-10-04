import "./Detail.css";
import DetailHeader from "./DetailHeader/DetailHeader";
import DetailPic from "./DetailPic/DetailPic";
import DetailContent from "./DetailContent/DetailContent";

const Detail = (props) => {
  return props.nowStudentData.id === null ? (
    <div className={"DetailNotSelected"}>
      <p id={"Text1"} className={"Text"}>
        왼쪽 표에서
      </p>
      <p id={"Text2"} className={"Text"}>
        학생을 선택해주세요
      </p>
    </div>
  ) : (
    <div className={"Detail"}>
      <DetailHeader nowStudentData={props.nowStudentData} />
      <DetailPic nowStudentData={props.nowStudentData} />
      <DetailContent nowStudentData={props.nowStudentData} />
    </div>
  );
};

export default Detail;
