import "./DetailPic.css";

const DetailPic = (props) => {
  return (
    <div className={"DetailPic"}>
      <img
        src={props.nowStudentData.profileImg}
        alt="No Image"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default DetailPic;
