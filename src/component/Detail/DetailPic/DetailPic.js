import './DetailPic.css'
import {useStudentContext} from '../../../context/Context';

const DetailPic = () => {
    const context = useStudentContext();
    return (
        <div className={'DetailPic'}>
            <img src={context.studentData.filter(student=>student.id === context.nowStudentData.id)[0].profileImg} alt='No Image'
            width = {'100%'} height={'100%'} />
        </div>
    )
}


export default DetailPic

