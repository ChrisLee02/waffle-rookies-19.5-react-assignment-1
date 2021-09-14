import './LockedProfileInfo.css'
import {useStudentContext} from '../../../context/Context';
import Locked from '../../../Data/Locked.svg'

const LockedProfileInfo = () => {
    const context = useStudentContext();
    return (
        <div className={'LockedProfileInfo'}>
            <ul className={'Infomation'}>
                <li className={'InfoLine'}>
                    전화번호 <input disabled={true} className={'InfoInput'} id={'Phone'}
                                value={context.nowStudentData.phone}/>
                </li>
                <li className={'InfoLine'}>
                    이메일 <input disabled={true} className={'InfoInput'} id={'Email'}
                               value={context.nowStudentData.email}/>
                </li>
                <li className={'InfoLine'}>
                    전공 <input disabled={true} className={'InfoInput'} id={'Major'}
                              value={context.nowStudentData.major}/>
                </li>
            </ul>
            <img src={Locked} width={'100px'} height={'100px'} />
            <h1>수정하려면 잠금을 해제하세요</h1>
        </div>
    )
}


export default LockedProfileInfo