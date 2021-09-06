import logo from './logo.svg';
import './App.css';
import Header from "./component/Header/Header";
import DashBoard from "./component/DashBoard/DashBoard";
import ControlBar from "./component/ControlBar/ControlBar";
import Table from "./component/Table/Table";
import Detail from "./component/Detail/Detail";
import {useState} from "react";
import DetailNotSelected from "./component/Detail/DetailNotSelected";


function App() {
    let tmp = 'Detal';


    return (
        <div className={'App'}>
            <Header></Header>
            <DashBoard></DashBoard>
            <div className={'Down'}>
                <div className={'Left'}>
                    <ControlBar></ControlBar>
                    <Table></Table>
                </div>
                <div className={'Right'}>
                    {tmp === 'Detail' ? <Detail></Detail> : <DetailNotSelected></DetailNotSelected>}
                </div>

            </div>

        </div>
    );
}

export default App;
