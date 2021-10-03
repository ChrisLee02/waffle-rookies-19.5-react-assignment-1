import './IDHeader.css';
import {ReactComponent as Arrow2} from '../../Data/Arrow2.svg';
import {useStudentContext} from '../../context/StudentsContext';
import {Link, useHistory} from 'react-router-dom';

const IDHeader = (props) => {
    const context = useStudentContext();
    const history = useHistory();
    return (
        <header className={'IDHeader'}>
            <Link
                onClick={() => {
                    context.setStudentData(
                        context.studentData.map((student) =>
                            student.id === props.nowStudentData.id
                                ? {...student, locked: props.nowStudentData.locked}
                                : student
                        )
                    );
                    context.setNowStudentID(props.nowStudentData.id);
                }}
                className={'Back'}
                to={'/students'}>
                <Arrow2 id={'Arrow'} height={'16px'} width={'16px'}></Arrow2>
                학생 목록 페이지로
            </Link>
        </header>
    );
};

export default IDHeader;
