import "./ControlBar.css";

const ControlBar = (props) => {
  return (
    <div className={"ControlBar"}>
      <input
        value={props.search}
        onChange={(e) => {
          // 수정이 생기면
          props.setSearch(e.target.value); // 내부 값 변경
        }}
        placeholder={"검색"}
        type={"text"}
      />
      <button onClick={props.openModal}>추가</button>
    </div>
  );
};

export default ControlBar;
