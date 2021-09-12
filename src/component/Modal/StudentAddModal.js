import './StudentAddModal.css'
import {useState} from 'react';


const StudentAddModal = (props) => {

    const open = props.modalOpen;
    const [name, setname] = useState();
    const [grade, setgrade] = useState();
    const [profileImg, setprofileImg] = useState(); //모달의 텍스트 박스에 들어갈 변수
    const AddStudent = () => {
        const korean = /[가-힣]/; //한국어인지 검사하는 코드
        if ( /[가-힣]{2,3}/g.test(name)  && ['1','2','3'].includes(grade)) {  //2글자이면서, 두 글자 모두 한국어면서, 학년이 1~3이면
            const tmp = props.stuData.filter(student => student.grade === grade);
            const tmp2 = tmp.filter(student => student.name === name); //학년, 이름으로 필터링
            const tmp3 = { //입력한 내용의 학생 클래스
                id: Math.random(),
                name: name,
                grade: grade,
                profileImg: profileImg
            };
            if(tmp2.length === 0){ // 학년과 이름으로 필터링한 tmp2가 비어 있다면 - 한 학년에 동명이인이 없다면
                props.addStudent(tmp3); //학생 추가
                props.setnowstuData(tmp3);
                props.closeModal(); //모달 닫기
            } else {
                window.alert('한 학년에 동명이인이 있어요:)'); //알림 띄우고 업데이트 X, 모달 유지
            }

        } else { //이름 및 학년 조건이 안맞을 때
            window.alert('이름은 한글 2~3글자, 학년은 1,2,3 중 하나로 설정할 수 있습니다.');
        }
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'closeModal modal'}>
            {open ? (
                <div className={open ? 'openModalInside' : 'closeModalInside'}>
                    <ul className={'ModalContent'}> {/*이 부분 코드는 DetailContents 재사용*/}
                        <li className={'ModalLine'} id={'Name'}>
                            이름 <input onChange={e => { {/*입력창 내부에 변화가 생기면, state변경*/}
                            setname(e.target.value);
                        }} className={'ModalInput'}/>
                        </li>
                        <li className={'ModalLine'} id={'Grade'}>
                            학년 <input onChange={e => {
                            setgrade(e.target.value);
                        }} className={'ModalInput'}/>
                        </li>
                        <li className={'ModalLine'} id={'Profile'}>
                            프로필 <input onChange={e => {
                            setprofileImg(e.target.value);
                        }} className={'ModalInput'}/>
                        </li>
                    </ul>
                    <div className={'Button'}>
                        <div></div>
                        <button className={'close'} onClick={props.closeModal}>닫기</button>
                        <div></div>
                        <button className={'add'} onClick={() => {
                            AddStudent();
                        }}>추가
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default StudentAddModal
