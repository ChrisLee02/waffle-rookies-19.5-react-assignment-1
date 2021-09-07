import './App.css';
import Header from './component/Header/Header';
import DashBoard from './component/DashBoard/DashBoard';
import ControlBar from './component/ControlBar/ControlBar';
import Table from './component/Table/Table';
import Detail from './component/Detail/Detail';
import {useState} from 'react'
import DetailNotSelected from './component/Detail/DetailNotSelected';
import {dummyData} from './Data/DummyData';

function App() {
    /*const [Clicked, setClicked] = useState(0); 생각해보니 필요없음. 현재 클릭한 학생 데이터의
    * null 여부로 판단. */       /*지금 Table 에서 학생이 클릭되었는지 - 0이 false, 1이 true*/
    const [stuData, setstuData] = useState(dummyData); /*더미 데이터로 학생 데이터 초기화*/
    const [nowstuData, setnowstuData] = useState(null); /*현재 클릭한 학생의 데이터를 받아오는 변수*/
    const addStudent = (newstuData) => {
        setstuData([...stuData, newstuData]);

        /* 학생 정보 담긴 객체 newStuData에 대해, setstuData([...stuData, newStuData]  */
    }

    const raiseModal = () => {
        return null;
    }


    return (
        <div className={'App'}>
            <Header></Header>
            <DashBoard></DashBoard>
            <div className={'Down'}>
                <div className={'Left'}>
                    <ControlBar raiseModal={raiseModal}></ControlBar>
                    <Table nowstuData={nowstuData} setnowstuData={setnowstuData} stuData={stuData}></Table>
                </div>
                <div className={'Right'}>
                    {nowstuData === null ? <DetailNotSelected></DetailNotSelected> : <Detail nowstuData={nowstuData}></Detail>}
                </div>
            </div>

        </div>
    );
}


export default App;

