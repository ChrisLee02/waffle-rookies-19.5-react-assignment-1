import './ProfileInfo.css'
import {useStudentContext} from '../../../context/Context';

const ProfileInfo = () => {
    const context = useStudentContext();
    return (
        <div className={'ProfileInfo'}>
            <ul className={'Infomation'}>
                <li className={'InfoLine'}>
                    전화번호 <input className={'InfoInput'} id={'Phone'}
                                value={context.nowStudentData.phone} onChange={(e) => {
                    context.setNowStudentData({...context.nowStudentData, phone: e.target.value});
                }}/>
                </li>
                <li className={'InfoLine'}>
                    이메일 <input className={'InfoInput'} id={'Email'}
                               value={context.nowStudentData.email} onChange={(e) => {
                    context.setNowStudentData({...context.nowStudentData, email: e.target.value});
                }}/>
                </li>

                <li className={'InfoLine'}>
                    전공
                    <select className={'InfoInput'} id={'Major'} onChange={(e) => {
                    context.setNowStudentData({...context.nowStudentData, major: e.target.value});
                }} value={context.nowStudentData.major} >
                        <option value="">전공선택</option>
                        <option value="frontend">frontend</option>
                        <option value="backend">backend</option>
                        <option value="android">android</option>
                        <option value="iOS">iOS</option>
                        <option value="design">design</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}


export default ProfileInfo