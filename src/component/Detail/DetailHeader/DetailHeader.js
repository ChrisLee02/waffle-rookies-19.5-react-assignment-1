import './DetailHeader.css'
import {useStudentContext} from '../../../context/Context';
import image from '../../../Data/PageMove.svg'
import {useHistory} from 'react-router-dom';

const DetailHeader = (props) => {
    const context = useStudentContext();
    const history = useHistory();
    return (
        <div className={'DetailHeader'}>
            <div></div>
            <button onClick={() => {
                context.setNowStudentData(context.studentData.filter(student=>student.id===context.nowStudentData.id)[0]);
                history.push('/students/'+context.nowStudentData.id.toString())
            }} id={'GoDetail'}><img alt='' src={image}/></button>

        </div>
    )
}


export default DetailHeader;
