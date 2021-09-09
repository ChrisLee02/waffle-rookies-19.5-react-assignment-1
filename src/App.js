import './App.css';
import Header from './component/Header/Header';
import DashBoard from './component/DashBoard/DashBoard';
import ControlBar from './component/ControlBar/ControlBar';
import Table from './component/Table/Table';
import Detail from './component/Detail/Detail';
import {useState} from 'react'
import DetailNotSelected from './component/Detail/DetailNotSelected';
import {dummyData} from './Data/DummyData';
import Modal from './component/Modal/Modal';

function App() {
    /*const [Clicked, setClicked] = useState(0); 생각해보니 필요없음. 현재 클릭한 학생 데이터의
    * null 여부로 판단. */       /*지금 Table 에서 학생이 클릭되었는지 - 0이 false, 1이 true*/ //==> 무시하시면 됩니다.

    const [stuData, setstuData] = useState(dummyData); /*더미 데이터로 학생 데이터 초기화*/
    const [nowstuData, setnowstuData] = useState({ //현재 선택된 학생의 데이터, id 값만 임의로 부여해둠.
        id: Math.random(),
        name: null,
        grade: null,
        profileImg: null
    });
    const [changedData, setchangedData] = useState({
        id: Math.random(),
        name: null,
        grade: null,
        profileImg: null
    }); /*Detail에서 수정된 데이터 관리*/

    const [filteredData, setfilteredData] = useState(stuData); // 실제로 테이블에서 출력할 때 쓰는 필터링된 데이터
    const [search, setsearch] = useState(''); //검색창 입력 값 받아옴

    const filterStudent = (filterKeyword) => { //검색어가 들어갈 때 필터링하는 함수
        if (filterKeyword === '') { //공백이면 그냥 다 출력하도록
            setfilteredData(stuData);
        } else { //아니면 문자열 내부에 키워드가 포함된 애들만 필터링
            setfilteredData(stuData.filter(student => student.name.includes(filterKeyword)));
        }
    }

    const addStudent = (newstuData) => { // 학생을 추가하는 함수
        setstuData([...stuData, newstuData]);

        /* 학생 정보 담긴 객체 newStuData에 대해, setstuData([...stuData, newStuData]  */
    }
    const delStudent = (id) => { //학생을 제거하는 함수
        setstuData(stuData.filter(student => student.id !== id));
    }

    const delfilteredStudent = (id) => { // 뒤늦게 추가한 함수 -> stuData기반으로 쭉 내릴려고 했는데, 그렇게하니 한 박자 늦는 문제가 발생
        setfilteredData(stuData.filter(student => student.id !== id));
    }

    const modifyStudent = (id, data) => { // 학생 정보를 수정하는 함수
        setstuData(stuData.map(student => student.id === id ? ({...student, ...data}) : student));
        // id로 동일성 검증, 같다면 속성을 덮어쓰는 식으로 수정, 나머지 경우는 그대로 유지
    }
    const modifyfilteredStudent = (id, data) => { //위와 마찬가지로 한 박자 늦는 문제를 수정
        setfilteredData(filteredData.map(student => student.id === id ? ({...student, ...data}) : student));

        // id로 동일성 검증, 같다면 속성을 덮어쓰는 식으로 수정, 나머지 경우는 그대로 유지
    }

    const [modalOpen, setModalOpen] = useState(false); // 모달은 기본값이 꺼진 상태로

    const openModal = () => { //제목이 곧 내용
        setModalOpen(true);
    }
    const closeModal = () => { //제목이 곧 내용
        setModalOpen(false);
    }

    const [name, setname] = useState(); //텍스트 박스에 들어갈 변수
    const [grade, setgrade] = useState(); //텍스트 박스에 들어갈 변수
    const [profileImg, setprofileImg] = useState(); //텍스트 박스에 들어갈 변수
    // 이 부분 역시 데이터 변경이 한 박자 늦어지는 문제를 해결하려고 수정함

    return (
        <div className={'App'}>
            <Modal filteredData={filteredData} setfilteredData={setfilteredData} stuData={stuData} addStudent={addStudent} closeModal={closeModal} modalOpen={modalOpen}></Modal>
            <Header></Header>
            <DashBoard></DashBoard>
            <div className={'Down'}>
                <div className={'Left'}>
                    <ControlBar search={search} filterStudent={filterStudent}
                                openModal={openModal}></ControlBar>
                    <Table filteredData={filteredData} setname={setname} setgrade={setgrade}
                           setprofileImg={setprofileImg} changedData={changedData} setchangedData={setchangedData}
                           nowstuData={nowstuData}
                           setnowstuData={setnowstuData} stuData={stuData}></Table>
                </div>
                <div className={'Right'}>
                    {nowstuData.name === null ? <DetailNotSelected></DetailNotSelected> : //현재 선택된 학생이 있는지 판단
                        <Detail delfilteredStudent={delfilteredStudent} delStudent={delStudent} name={name}
                                grade={grade} profileImg={profileImg}
                                setname={setname} setgrade={setgrade} modifyfilteredStudent={modifyfilteredStudent}
                                setprofileImg={setprofileImg} setfilteredData={setfilteredData}
                                modifyStudent={modifyStudent} changedData={changedData} setchangedData={setchangedData}
                                stuData={stuData} nowstuData={nowstuData} setnowstuData={setnowstuData}></Detail>}
                </div> {/*선택된 학생이 있으면 Detail 표시, 없으면 메세지창을 표시*/}
            </div>

        </div>
    );
}


export default App;

