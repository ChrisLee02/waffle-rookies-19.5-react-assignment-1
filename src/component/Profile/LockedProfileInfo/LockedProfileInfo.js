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
                    이메일 <div className={'Shell'}><input className={'InfoInput'} id={'Email'} disabled={true}
                                    value={context.nowStudentData.email}/></div>
                </li>


                <li className={'InfoLine'}>
                    전공
                    <select disabled={true} className={'InfoInput'} id={'Major'} onChange={(e) => {
                        context.setNowStudentData({...context.nowStudentData, major: e.target.value});
                    }} value={context.nowStudentData.major}>
                        <option value="">전공선택</option>
                        <option value="frontend">frontend</option>
                        <option value="backend">backend</option>
                        <option value="android">android</option>
                        <option value="iOS">iOS</option>
                        <option value="design">design</option>
                    </select>
                </li>
                <li className={'InfoLine'} id={'Profile'}>
                    프로필 <input disabled={true} onChange={e => {
                    context.setNowStudentData({...context.nowStudentData, profileImg: e.target.value});
                }} className={'InfoInput'} value={context.nowStudentData.profileImg}/>
                </li>
            </ul>

            <img src={Locked} width={'100px'} height={'100px'} />

            <h1>수정하려면 잠금을 해제하세요</h1>
        </div>
    )
}


export default LockedProfileInfo