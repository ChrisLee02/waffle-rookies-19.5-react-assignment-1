import './Students.css';
import Header from '../../component/Header/Header';
import DashBoard from '../../component/DashBoard/DashBoard';
import ControlBar from '../../component/ControlBar/ControlBar';
import Table from '../../component/Table/Table';
import Detail from '../../component/Detail/Detail';
import {useState} from 'react'
import DetailNotSelected from '../../component/Detail/DetailNotSelected';
import StudentAddModal from '../../component/Modal/StudentAddModal/StudentAddModal';
import {useStudentContext} from '../../context/Context';


const Students = (props) => {
    const context = useStudentContext();

    const [modalOpen, setModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로

    const openModal = () => { //제목이 곧 내용
        setModalOpen(true);
    }
    const closeModal = () => { //제목이 곧 내용
        setModalOpen(false);
    }

    return (
        <div className={'Students'}>
            <StudentAddModal closeModal={closeModal}
                             modalOpen={modalOpen}/>
            <Header/>
            <DashBoard/>
            <div className={'Down'}>
                <div className={'Left'}>
                    <ControlBar openModal={openModal}/>
                    <Table/>
                </div>
                <div className={'Right'}>
                    {context.nowStudentData.name === null ? <DetailNotSelected/> : //현재 선택된 학생이 있는지 판단
                        <Detail history={props.history}/>}
                </div>
                {/*선택된 학생이 있으면 Detail 표시, 없으면 메세지창을 표시*/}
            </div>
        </div>
    );
}


export default Students;
