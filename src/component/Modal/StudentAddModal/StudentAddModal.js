import './StudentAddModal.css'
import {useState} from 'react';
import {useStudentContext} from '../../../context/Context';
import axios from 'axios';

const StudentAddModal = (props) => {
    const context = useStudentContext();
    const open = props.modalOpen;
    const [name, setName] = useState();
    const [grade, setGrade] = useState();

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'closeModal modal'}>
            {open ? (
                <div className={open ? 'openModalInside' : 'closeModalInside'}>
                    <ul className={'ModalContent'}> {/*이 부분 코드는 DetailContents 재사용*/}
                        <li className={'ModalLine'} id={'Name'}>
                            이름 <input onChange={e => { {/*입력창 내부에 변화가 생기면, state변경*/}
                            setName(e.target.value);
                        }} className={'ModalInput'}/>
                        </li>
                        <li className={'ModalLine'} id={'Grade'}>
                            학년 <input onChange={e => {
                            setGrade(Number(e.target.value));
                        }} className={'ModalInput'}/>
                        </li>
                    </ul>
                    <div className={'Button'}>
                        <div></div>
                        <button className={'close'} onClick={props.closeModal}>닫기</button>
                        <div></div>
                        <button className={'add'} onClick={() => {
                            axios.post(context.baseURL+'/student', {
                                "name": name,
                                "grade": Number(grade)
                            },context.config)
                                .then((response)=>{
                                    props.closeModal();
                                    context.setNowStudentData({      //현재 선택된 학생의 데이터, id 값만 임의로 부여해둠.
                                        id: response.data.id,
                                        name: name,
                                        grade: grade,
                                        profileImg: null,
                                        email: '',
                                        phone: '',
                                        major: '',
                                        locked: false
                                    })
                                      //새로고침을 해줘야 리렌더가 일어남.
                                })
                                .catch((error)=>{
                                    window.alert(error.response.data.message);
                                })
                        }}>추가
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default StudentAddModal
