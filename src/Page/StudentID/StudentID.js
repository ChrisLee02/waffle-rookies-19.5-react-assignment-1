import './StudentID.css';
import IDHeader from '../../component/Header/IDHeader';
import {useStudentContext} from '../../context/StudentsContext';
import {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import IDButtons from '../../component/Buttons/IDButtons';
import RoughProfile from '../../component/Profile/RoughProfile/RoughProfile';
import ProfileInfo from '../../component/Profile/ProfileInfo/ProfileInfo';
import Comment from '../../component/Comment/Comment';
import StudentDeleteModal from '../../component/Modal/StudentDeleteModal/StudentDeleteModal';
import LockedProfileInfo from '../../component/Profile/LockedProfileInfo/LockedProfileInfo';
import LockedButtons from '../../component/Buttons/LockedButtons';
import axios from 'axios';
import NoComment from '../../component/Comment/NoComment';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNetworkContext} from '../../context/NetworkContext';
import dayjs from 'dayjs';


const StudentID = () => {
    const networkContext = useNetworkContext();
    const history = useHistory();
    const [modalOpen, setModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로
    const [comments, setComments] = useState([]);
    const [nowStudentData, setNowStudentData] = useState({
        id: null,
        name: null,
        grade: null,
        profileImg: null,
        email: '',
        phone: '',
        major: '',
        locked: false,
    });


    const openModal = () => {
        //제목이 곧 내용
        setModalOpen(true);
    };
    const closeModal = () => {
        //제목이 곧 내용
        setModalOpen(false);
    };
    const params = useParams();
    const id = params.id;

    const commentUpdate = () => {
        axios
            .get(
                '/student/' + id + '/comment',
            )
            .then((response) => {
                console.log(response.data);
                setComments(
                    response.data.map((comment) => {
                        return (
                            <li key={comment.id} className={'Comment'}>
                                <div>{comment.content}</div>
                                <span>
                  {dayjs(comment.datetime).format('MM월 DD일 HH시 mm분')}
                </span>
                            </li>
                        );
                    })
                );
            });
    };

    const controlLock = () => {
        axios
            .post(
                '/student/' + id + (nowStudentData.locked ? '/unlock' : '/lock'),
                nowStudentData
            )
            .then((response) =>
                setNowStudentData({
                    ...nowStudentData,
                    locked: (nowStudentData.locked ? false : true),
                })
            )
            .then(() => commentUpdate())
            .catch((error) => {
                toast(error.response.data.message)
            });
    };

    useEffect(() => {
        if (networkContext.token === 'null' || networkContext.token === undefined) {
            history.push('/login');
        }
        axios
            .get('/student/' + id)
            .then((response) => {
                console.log('ID 성공');
                setNowStudentData(response.data);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
                history.push('/students');
            });
        commentUpdate();
    }, []);


    return (
        <div className={'StudentID'}>
            <StudentDeleteModal
                history={history}
                closeModal={closeModal}
                modalOpen={modalOpen}
                nowStudentData={nowStudentData}
            />
            <IDHeader nowStudentData={nowStudentData}/>
            <div className={'IDDown'}>
                <div className={'IDLeft'}>
                    <RoughProfile nowStudentData={nowStudentData} setNowStudentData={setNowStudentData}/>
                    <div className={'IDTitle'}>정보</div>
                    {nowStudentData.locked ? (
                        <LockedProfileInfo nowStudentData={nowStudentData}/>
                    ) : (
                        <ProfileInfo nowStudentData={nowStudentData} setNowStudentData={setNowStudentData}/>
                    )}
                </div>
                <div className={'IDRight'}>
                    <IDButtons
                        nowStudentData={nowStudentData}
                        commentUpdate={commentUpdate}
                        controlLock={controlLock}
                        openModal={openModal}
                    />
                    <div className={'IDTitle'}>코멘트</div>
                    <Comment setComments={setComments}
                             commentUpdate={commentUpdate}
                             comments={comments}/>
                </div>
            </div>
        </div>
    );
};

export default StudentID;
