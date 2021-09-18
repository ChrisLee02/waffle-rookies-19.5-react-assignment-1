import './StudentDeleteModal.css'
import {useState} from 'react';
import {useStudentContext} from '../../../context/Context';
import Warning from '../../../Data/Warning.svg'
import Delete from '../../../Data/Delete.svg';
import Lock from '../../../Data/UnLocked.svg';
import X from '../../../Data/X.svg'

const StudentDeleteModal = (props) => {
    const context = useStudentContext();
    const open = props.modalOpen;


    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'closeModal modal'}>
            {open ? (
                <div className={open ? 'openModalInside' : 'closeModalInside'}>
                    <header className={'DeleteHeader'}>
                        <img src={Warning} width={'55px'} height={'45px'}/>
                        <h1 id={'HeaderMessage'}>학생을 삭제합니다</h1>
                    </header>

                    <h2 className={'DeleteBody'}>이 작업은 되돌릴 수 없습니다.</h2>


                    <div className={'Button'}>
                        <div></div>
                        <button  className={'DeleteClose'} onClick={props.closeModal}><img src={X}/>닫기</button>
                        <div></div>
                        <button onClick={()=>{
                            context.delStudent();
                            props.closeModal();
                            props.history.push('/students');
                        }} className={'IdButton Delete'}> <img src={Delete}/>삭제</button>

                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default StudentDeleteModal
