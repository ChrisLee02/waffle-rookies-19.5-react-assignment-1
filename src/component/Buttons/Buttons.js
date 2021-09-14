import Lock from '../../Data/UnLocked.svg';
import Delete from '../../Data/Delete.svg';
import Save from '../../Data/Save.svg';
import './Buttons.css'
import {useStudentContext} from '../../context/Context';

const IDButtons = (props) => {
    const context = useStudentContext();

    return (
        <div className={'IDButtons'}>
            <button onClick={props.controlLock} className={'IdButton Lock'}><img src={Lock}/>잠금</button>
            <button onClick={props.openModal} className={'IdButton Delete'}><img src={Delete}/> 삭제</button>
            <button onClick={()=>{
                context.modifyStudent(context.nowStudentData.id, context.nowStudentData);
                window.alert('저장됨');
            }} className={'IdButton Save'}><img src={Save}/> 저장</button>
        </div>
    )
}

export default IDButtons

