import './Modal.css'
import {useState} from 'react';


const Modal = (props) => {
    const open = props.modalOpen;

    const [name, setname] = useState();
    const [grade, setgrade] = useState();
    const [profileImg, setprofileImg] = useState(); //텍스트 박스에 들어갈 변수

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'closeModal modal'}>
            {open ? (
                <div className={open ? 'openModalInside' : 'closeModalInside'}>
                    <ul className={'ModalContent'}>
                        <li className={'ModalLine'} id={'Name'}>
                            이름 <input onChange={e => {
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
                            const korean = /[가-힣]/;
                            if ( name.length === 2 && korean.test(name[0]) && korean.test(name[1]) && ( Number(grade) === 1 || Number(grade) === 2 || Number(grade) === 3)) {
                                let tmp = props.stuData.filter(student => student.grade === grade);
                                let tmp2 = tmp.filter(student => student.name === name);
                                let tmp3 = {
                                    id: Math.random(),
                                    name: name,
                                    grade: grade,
                                    profileImg: profileImg
                                };
                                if(tmp2.length === 0){
                                    props.addStudent(tmp3);
                                    props.setfilteredData( [...props.filteredData,tmp3] );
                                    props.closeModal();
                                } else {
                                    window.alert('한 학년에 동명이인이 있어요:)');
                                }

                            } else if (name === 3 && korean.test(name[0]) && korean.test(name[1]) && korean.test(name[2]) && (grade === 1 || grade === 2 || grade === 3)) {
                                let tmp = props.stuData.filter(student => student.grade === grade);
                                let tmp2 = tmp.filter(student => student.name === name);
                                let tmp3 = {
                                    id: Math.random(),
                                    name: name,
                                    grade: grade,
                                    profileImg: profileImg
                                };
                                if(tmp2.length === 0){
                                    props.addStudent(tmp3);
                                    props.setfilteredData( [...props.filteredData,tmp3] );
                                    props.closeModal();
                                } else {
                                    window.alert('한 학년에 동명이인이 있어요:)');
                                }
                            } else {
                                window.alert('이름은 한글 2~3글자, 학년은 1,2,3 중 하나로 설정할 수 있습니다.');
                            }
                        }}>추가
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Modal
