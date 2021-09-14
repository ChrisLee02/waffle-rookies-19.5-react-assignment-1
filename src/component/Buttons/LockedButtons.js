import Lock from '../../Data/Locked.svg';
import Delete from '../../Data/Delete.svg';
import Save from '../../Data/Save.svg';
import './Buttons.css'
import {useStudentContext} from '../../context/Context';

const LockedIDButtons = (props) => {
    const context = useStudentContext();

    return (
        <div className={'IDButtons'}>
            <button onClick={props.controlLock} className={'LockedIdButton Unlock'}><img src={Lock}/>해제</button>
            <button className={'LockedIdButton'}><img src={Delete}/> 삭제</button>
            <button className={'LockedIdButton'}><img src={Save}/> 저장</button>
        </div>
    )
}

export default LockedIDButtons
