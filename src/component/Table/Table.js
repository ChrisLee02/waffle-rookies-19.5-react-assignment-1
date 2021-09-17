import './Table.css'
import TableHeader from './TableHeader/TableHeader';
import TableContent from './TableContent/TableContent';
import {useStudentContext} from '../../context/Context';
import NoTableContents from './NoTableContents/NoTableContents';

const Table = (props) => {
    const context = useStudentContext();
    const TableContents =
        context.filterStudent(context.search).map((student) => {
            return (
                student.id === context.nowStudentData.id ?
                    <TableContent // 현재 학생의 테이블 내용
                        selected={true}
                        student={student} key={student.id}  ></TableContent> : // selected 값을 참으로 전달
                    <TableContent // 나머지 테이블 내용
                        selected={false}
                        student={student} key={student.id}></TableContent> // selected는 거짓으로 전달
            )
        }
    );


    return (
        <div className={'Table'}>
            <TableHeader></TableHeader>
            {context.studentData.length===0? <NoTableContents/> : TableContents}
        </div>
    )
}


export default Table