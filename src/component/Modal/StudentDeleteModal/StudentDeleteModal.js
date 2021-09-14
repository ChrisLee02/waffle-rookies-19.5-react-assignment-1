import './StudentDeleteModal.css'
import {useState} from 'react';
import {useStudentContext} from '../../../context/Context';


const StudentDeleteModal = (props) => {
    const context = useStudentContext();
    const open = props.modalOpen;



    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'closeModal modal'}>
            {open ? (
                <div className={open ? 'openModalInside' : 'closeModalInside'}>



                    <div className={'Button'}>
                        <div></div>
                        <button className={'close'} onClick={props.closeModal}>닫기</button>
                        <div></div>
                        <button className={'Del'} onClick={()=>{
                            context.delStudent();
                            props.closeModal();
                            props.history.push('/students');
                        }}>삭제
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default StudentDeleteModal
