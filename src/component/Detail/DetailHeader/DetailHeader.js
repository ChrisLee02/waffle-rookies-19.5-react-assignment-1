import './DetailHeader.css'
import {useStudentContext} from '../../../context/Context';
import image from '../../../Data/PageMove.svg'
import {Router, Link} from 'react-router-dom';

const DetailHeader = (props) => {
    const context = useStudentContext();

    return (
        <div className={'DetailHeader'}>
            <div></div>
            <button onClick={() => {
                context.setNowStudentData(context.studentData.filter(student=>student.id===context.nowStudentData.id)[0]);
                props.history.push('/students/:id')
            }} id={'GoDetail'}><img src={image}/></button>

        </div>
    )
}


export default DetailHeader;
