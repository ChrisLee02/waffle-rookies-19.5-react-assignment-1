import Lock from '../../Data/UnLocked.svg';
import Delete from '../../Data/Delete.svg';
import Save from '../../Data/Save.svg';
import './Buttons.css'
import {useStudentContext} from '../../context/Context';
import axios from 'axios';

const IDButtons = (props) => {
    const context = useStudentContext();
    return (
        <div className={'IDButtons'}>
            <button onClick={props.controlLock} className={'IdButton Lock'}><img alt='' src={Lock}/>잠금</button>
            <button onClick={props.openModal} className={'IdButton Delete'}><img alt='' src={Delete}/> 삭제</button>
            <button onClick={()=>{
                axios.patch(context.baseURL + '/student/' + context.nowStudentData.id.toString() ,{
                    "profile_img": context.nowStudentData.profile_img ,
                    "email": context.nowStudentData.email ,
                    "phone": context.nowStudentData.phone ,
                    "major": context.nowStudentData.major
                } , context.config).then((response)=>{
                    window.alert('저장됨.');
                }).catch(window.alert);

            }} className={'IdButton Save'}><img alt='' src={Save}/> 저장</button>
        </div>
    )
}

export default IDButtons

