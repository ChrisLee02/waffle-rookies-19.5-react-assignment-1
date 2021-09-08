import './TableContent.css'
import Arrow1 from './Arrow1.svg'
import Arrow2 from './Arrow2.svg'
import {useState} from 'react';

const TableContent = (props) => {
    /*const [backgroundColor, tmp] = useState(props.selected === 0 ? '#F8F8F8' : '#C4C4C4');*/
    /*클릭이 되는 순간, 해당 라인은 배경색 고정, 아이콘 변경 후 고정*/

    const handleClick = () => {
        if (props.selected === 0) {
            props.setnowstuData(props.student);
            props.setchangedData(props.student);
            props.setname(props.student.name);
            props.setgrade(props.student.grade);
            props.setprofileImg(props.student.profileImg);
        } else {
            props.setnowstuData({
                id: Math.random(),
                name: null,
                grade: null,
                profileImg: null
            });
            props.setchangedData(null);
        }
    }

    return (
        props.selected === 0 ?
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