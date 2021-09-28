import './StudentID.css'
import IDHeader from '../../component/Header/IDHeader';
import {useStudentContext} from '../../context/Context';
import {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import IDButtons from '../../component/Buttons/Buttons';
import RoughProfile from '../../component/Profile/RoughProfile/RoughProfile';
import ProfileInfo from '../../component/Profile/ProfileInfo/ProfileInfo';
import Comment from '../../component/Comment/Comment';
import StudentDeleteModal from '../../component/Modal/StudentDeleteModal/StudentDeleteModal';
import LockedProfileInfo from '../../component/Profile/LockedProfileInfo/LockedProfileInfo';
import LockedButtons from '../../component/Buttons/LockedButtons';
import axios from 'axios';


const StudentID = () => {
    const context = useStudentContext();
    const history = useHistory();
    const [modalOpen, setModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로

    const openModal = () => { //제목이 곧 내용
        setModalOpen(true);
    }
    const closeModal = () => { //제목이 곧 내용
        setModalOpen(false);
    }
    const params = useParams();
    const id = params.id;
    const controlLock = () => {
        if (context.nowStudentData.locked) {
            axios.post(context.baseURL+'/student/'+id+'/unlock' , context.nowStudentData , context.config)
                .then((response)=>context.setNowStudentData({...context.nowStudentData, locked: false}))
                .catch((response)=>window.alert('실패'));

        } else {
            axios.post(context.baseURL+'/student/'+id+'/lock', context.nowStudentData , context.config)
                .then((response)=>context.setNowStudentData({...context.nowStudentData, locked: true}))
                .catch((response)=>window.alert('실패'));
        }
    }


    useEffect(() => {
        if(localStorage.getItem('isLogIn') !== 'true'){
            history.push('/login');
        }
        axios.get(context.baseURL + '/student/' + id, context.config).then((response) => {
            console.log('ID 성공');
            context.setNowStudentData(response.data);
        }).catch((response)=>{
            window.alert('ID 실패');
            history.push('/students');
        });

    },[])


    return (
        <div className={'StudentID'}>
            <StudentDeleteModal history={history} closeModal={closeModal}
                                modalOpen={modalOpen}/>
            <IDHeader history={history}/>
            <div className={'IDDown'}>
                <div className={'IDLeft'}>
                    <RoughProfile></RoughProfile>
                    <div className={'IDTitle'}>정보</div>
                    {context.nowStudentData.locked ? <LockedProfileInfo></LockedProfileInfo> :
                        <ProfileInfo></ProfileInfo>}
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










