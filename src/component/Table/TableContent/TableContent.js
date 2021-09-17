import './TableContent.css'
import Arrow1 from '../../../Data/Arrow1.svg'
import Arrow2 from '../../../Data/Arrow2.svg'
import {useState} from 'react';
import {useStudentContext} from '../../../context/Context';

const TableContent = (props) => {

    const context = useStudentContext();

    const handleClick = () => {
        if (props.selected === false) {  //선택되지 않은 학생을 클릭하면,
            context.setNowStudentData(props.student);
        } else {    //선택된 학생을 다시 클릭하면,
            context.setNowStudentData({
                id: Math.random(),
                name: null,
                grade: null,
                profileImg: null
            });
        }
    }

    return (
        props.selected === false ? // selected 값에 따라 배경색 및 화살표 모양 변경
            <div className={'TableContent1'}>
                <div className={'Name'}>{props.student.name}</div>
                <div className={'Grade'}>{props.student.grade}</div>
                <div></div>
                {/*공백 맞추기용*/}
                <button onClick={handleClick} id={'Arrow1'}><img src={Arrow1} width={'33px'} height={'33px'}/></button>
            </div> :
            <div className={'TableContent2'}>
                <div className={'Name'}>{props.student.name}</div>
                <div className={'Grade'}>{props.student.grade}</div>
                <div></div>
                {/*공백 맞추기용*/}
                <button onClick={handleClick} id={'Arrow2'}><img src={Arrow2} width={'33px'} height={'33px'}/>
                </button>
            </div>
    )

}


export default TableContent;