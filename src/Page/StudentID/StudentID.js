import './StudentID.css'
import IDHeader from '../../component/Header/IDHeader';
import StudentAddModal from '../../component/Modal/StudentAddModal/StudentAddModal';
import {useStudentContext} from '../../context/Context';
import {useEffect ,useState} from 'react';
import {useParams} from 'react-router-dom';
import IDButtons from '../../component/Buttons/Buttons';
import RoughProfile from '../../component/Profile/RoughProfile/RoughProfile';
import ProfileInfo from '../../component/Profile/ProfileInfo/ProfileInfo';
import Comment from '../../component/Comment/Comment';
import StudentDeleteModal from '../../component/Modal/StudentDeleteModal/StudentDeleteModal';
import LockedProfileInfo from '../../component/Profile/LockedProfileInfo/LockedProfileInfo';
import LockedButtons from '../../component/Buttons/LockedButtons';

const StudentID = (props) => {
    const context = useStudentContext();

    const [modalOpen, setModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로

    const openModal = () => { //제목이 곧 내용
        setModalOpen(true);
    }
    const closeModal = () => { //제목이 곧 내용
        setModalOpen(false);
    }

    const controlLock = () => {
        if (context.nowStudentData.locked) {
            context.setNowStudentData({...context.nowStudentData, locked:false});
        } else {
            context.setNowStudentData({...context.nowStudentData, locked:true});
        }
    }
    const params = useParams()
    const id = params.id;
    useEffect(() => {
        if(context.studentData.filter(student=>student.id===Number(id)).length === 0) {
            props.history.push('/students');
        } else {
            context.setNowStudentData(context.studentData.filter(student=>student.id===Number(id))[0]);
        }
    },[params]);




    return (
        <div className={'StudentID'}>
            <StudentDeleteModal history={props.history} closeModal={closeModal}
                                modalOpen={modalOpen}/>
            <IDHeader history={props.history}/>
            <div className={'IDDown'}>
                <div className={'IDLeft'}>
                    <RoughProfile></RoughProfile>
                    <div className={'IDTitle'}>정보</div>
                    {context.nowStudentData.locked ? <LockedProfileInfo></LockedProfileInfo> : <ProfileInfo></ProfileInfo>}
                </div>
                <div className={'IDRight'}>
                    {context.nowStudentData.locked ? <LockedButtons controlLock={controlLock}></LockedButtons> :
                        <IDButtons controlLock={controlLock} openModal={openModal}></IDButtons>}
                    <div className={'IDTitle'}>코멘트</div>
                    <Comment></Comment>
                </div>

            </div>
        </div>
    );
}

export default StudentID










