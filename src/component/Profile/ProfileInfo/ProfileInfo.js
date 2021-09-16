import './ProfileInfo.css'
import {useStudentContext} from '../../../context/Context';

const ProfileInfo = () => {
    const context = useStudentContext();
    const setPhoneNum = (e) => { // 길이가 4, 9인 시점에서 지우는 중인지/쓰는 중인지로 2차 케이스를 나눔.
        context.setNowStudentData({...context.nowStudentData, phone: e.target.value});
        if (e.target.value.length === 4) {
            if (e.target.value[3] === '-') {
                context.setNowStudentData({...context.nowStudentData, phone: e.target.value.slice(0, 3)});
            } else {
                context.setNowStudentData({
                    ...context.nowStudentData,
                    phone: e.target.value.slice(0, 3) + '-' + e.target.value[3]
                });
            }
        }
        if (e.target.value.length === 9) {
            if (e.target.value[8] === '-') {
                context.setNowStudentData({...context.nowStudentData, phone: e.target.value.slice(0, 8)});
            } else {
                context.setNowStudentData({
                    ...context.nowStudentData,
                    phone: e.target.value.slice(0, 8) + '-' + e.target.value[8]
                });
            }
        }
    }
    return (
        <div className={'ProfileInfo'}>
            <ul className={'Infomation'}>
                <li className={'InfoLine'}>
                    전화번호 <input className={'InfoInput'} id={'Phone'}
                                value={context.nowStudentData.phone}
                                onChange={setPhoneNum}
                />
                </li>
                <li className={'InfoLine'}>
                    이메일 <input className={'InfoInput'} id={'Email'}
                                    value={context.nowStudentData.email.slice(0,-13)} onChange={(e) => {
                    context.setNowStudentData({...context.nowStudentData, email: e.target.value+'@waffle.hs.kr'});
                }}/>
                </li>
                <li className={'InfoLine'}>
                    전공
                    <select className={'InfoInput'} id={'Major'} onChange={(e) => {
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
                    프로필 <input onChange={e => {
                    context.setNowStudentData({...context.nowStudentData, profileImg: e.target.value});
                }} className={'InfoInput'} value={context.nowStudentData.profileImg}/>
                </li>
            </ul>
        </div>
    )
}


export default ProfileInfo