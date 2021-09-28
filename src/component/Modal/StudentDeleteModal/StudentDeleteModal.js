import './StudentDeleteModal.css'
import {useStudentContext} from '../../../context/Context';
import Warning from '../../../Data/Warning.svg'
import Delete from '../../../Data/Delete.svg';
import X from '../../../Data/X.svg'
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const StudentDeleteModal = (props) => {
    const context = useStudentContext();
    const open = props.modalOpen;
    const history = useHistory();
    const params = useParams();
    const id = params.id;
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
                        <button  className={'DeleteClose'} onClick={props.closeModal}><img alt='' src={X}/>닫기</button>
                        <div></div>
                        <button onClick={()=>{
                            axios.delete(context.baseURL+'/student/'+id, context.config)
                                .then((response)=>{
                                props.closeModal();
                                window.location.replace('/students'); //새로고침을 해줘야 리렌더가 일어남.
                            })
                                .catch((response)=>{
                                    window.alert('추가 실패');
                                })

                        }} className={'IdButton Delete'}> <img alt='' src={Delete}/>삭제</button>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default StudentDeleteModal
