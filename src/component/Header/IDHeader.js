import './IDHeader.css'
import Arrow2 from '../../Data/Arrow2.svg'
import {useStudentContext} from '../../context/Context';

const IDHeader = (props) => {
    const context = useStudentContext();
    return (
        <header className={'IDHeader'}>
            <div onClick={ () => {
                props.history.push('/students')
                context.setStudentData(context.studentData.map(student => student.id === context.nowStudentData.id ? ({...student, locked:context.nowStudentData.locked}) : student));
            }} className={'Back'}>
                <img id={'Arrow'} src={Arrow2} height={'16px'} width={'16px'}/>학생 목록 페이지로
            </div>
        </header>
    )
}

export default IDHeader