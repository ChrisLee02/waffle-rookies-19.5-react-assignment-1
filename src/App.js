import './App.css';
import Header from './component/Header/Header';
import DashBoard from './component/DashBoard/DashBoard';
import ControlBar from './component/ControlBar/ControlBar';
import Table from './component/Table/Table';
import Detail from './component/Detail/Detail';
import {useState} from 'react'
import DetailNotSelected from './component/Detail/DetailNotSelected';
import {dummyData} from './Data/DummyData';
import StudentAddModal from './component/Modal/StudentAddModal';

function App() {
    /*const [Clicked, setClicked] = useState(0); 생각해보니 필요없음. 현재 클릭한 학생 데이터의
    * null 여부로 판단. */       /*지금 Table 에서 학생이 클릭되었는지 - 0이 false, 1이 true*/ //==> 무시하시면 됩니다.

    const [stuData, setstuData] = useState(dummyData); /*더미 데이터로 학생 데이터 초기화*/
    const [nowstuData, setnowstuData] = useState({      //현재 선택된 학생의 데이터, id 값만 임의로 부여해둠.
        id: null,
        name: null,
        grade: null,
        profileImg: null
    });

    const [search, setsearch] = useState(''); //검색창 입력 값 받아옴


    const filterStudent = (filterKeyword) => { //검색어가 들어갈 때 필터링하는 함수
        if (filterKeyword === '') { //공백이면 그냥 다 출력하도록
            return stuData;
        } else { //아니면 문자열 내부에 키워드가 포함된 애들만 필터링
            return stuData.filter(student => student.name.includes(filterKeyword));
        }
    }

    const addStudent = (newstuData) => { // 학생을 추가하는 함수
        setstuData([...stuData, newstuData]);

        /* 학생 정보 담긴 객체 newStuData에 대해, setstuData([...stuData, newStuData]  */
    }
    const delStudent = (id) => { //학생을 제거하는 함수
        setstuData(stuData.filter(student => student.id !== id));
    }


    const modifyStudent = (id, data) => { // 학생 정보를 수정하는 함수
        setstuData(stuData.map(student => student.id === id ? ({...student, ...data}) : student));
        // id로 동일성 검증, 같다면 속성을 덮어쓰는 식으로 수정, 나머지 경우는 그대로 유지
    }


    const [modalOpen, setModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로

    const openModal = () => { //제목이 곧 내용
        setModalOpen(true);
    }
    const closeModal = () => { //제목이 곧 내용
        setModalOpen(false);
    }



    return (
        <div className={'App'}>
            <StudentAddModal setnowstuData={setnowstuData} stuData={stuData} addStudent={addStudent} closeModal={closeModal}
                             modalOpen={modalOpen}/>
            <Header/>
            <DashBoard/>
            <div className={'Down'}>
                <div className={'Left'}>
                    <ControlBar search={search} setsearch={setsearch}
                                openModal={openModal}/>
                    <Table search={search} filterStudent={filterStudent}
                           nowstuData={nowstuData}
                           setnowstuData={setnowstuData} stuData={stuData}/>
                </div>
                <div className={'Right'}>
                    {nowstuData.name === null ? <DetailNotSelected/> : //현재 선택된 학생이 있는지 판단
                        <Detail
                            delStudent={delStudent}
                            modifyStudent={modifyStudent}
                            stuData={stuData} nowstuData={nowstuData} setnowstuData={setnowstuData}/>}
                </div>
                {/*선택된 학생이 있으면 Detail 표시, 없으면 메세지창을 표시*/}
            </div>

        </div>
    );
}


export default App;

