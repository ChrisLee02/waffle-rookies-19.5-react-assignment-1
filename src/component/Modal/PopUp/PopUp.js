import "./PopUp.css";

const PopUp = (props) => {
  const setCookie = (cookie_name, value, days) => {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정

    const cookie_value = escape(value) + "; expires=" + exdate.toUTCString();
    document.cookie = cookie_name + "=" + cookie_value;
  };

  const onClickPostpone = () => {
    props.closePopUp();
    setCookie("popUpPostpone", "Y", 1);
  };

  return (
    <div className={props.popUpOpen ? "openPopUp" : "closePopUp"}>
      <header className={"PopupHeader"}>
        <button className={"PopUpClose"} onClick={props.closePopUp}>
          X
        </button>
      </header>

      <p>공지사항이 있습니다.</p>
      <footer className={"PopUPFooter"}>
        <button className={"PopUpPostpone"} onClick={onClickPostpone}>
          X
        </button>
        <span onClick={onClickPostpone} className={"PostponeText"}>
          24시간동안 보지 않기
        </span>
      </footer>
    </div>
  );
};

export default PopUp;
