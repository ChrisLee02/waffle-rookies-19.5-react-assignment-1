import './RoughProfile.css'
import {useStudentContext} from '../../../context/Context';


const RoughProfile = () => {
    const context = useStudentContext();
    return (
        <div className={'Profile'}>
            <img id={'ProfileImg'} src={context.nowStudentData.profileImg}/>
            <ul className={'NameNGrade'}>
                <li className={'IDLine'}>
                    이름 <input disabled={true} className={'IDInput'} id={'Name'} value={context.nowStudentData.name}/>
                </li>
                <li className={'IDLine'}>
                    학년 <input disabled={true} className={'IDInput'} id={'Grade'} value={context.nowStudentData.grade}/>
                </li>
            </ul>

        </div>
    )
}



export default RoughProfile