import './ProfileInfo.css'
import {useStudentContext} from '../../../context/Context';

const ProfileInfo = () => {
    const context = useStudentContext();
    return (
        <div className={'ProfileInfo'}>
            <ul className={'Infomation'}>
                <li className={'InfoLine'}>
                    전화번호 <input className={'InfoInput'} id={'Phone'} value={context.nowStudentData.phone}/>
                </li>
                <li className={'InfoLine'}>
                    이메일 <input className={'InfoInput'} id={'Email'} value={context.nowStudentData.email}/>
                </li>
                <li className={'InfoLine'}>
                    전공 <input className={'InfoInput'} id={'Major'} value={context.nowStudentData.major}/>
                </li>
            </ul>
        </div>
    )
}



export default ProfileInfo