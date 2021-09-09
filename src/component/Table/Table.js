import './Table.css'
import TableHeader from './TableHeader/TableHeader';
import TableContent from './TableContent/TableContent';

const Table = (props) => {
    const TableContents =
        props.filterStudent(props.search).map((student) => {
            return (
                student.id === props.nowstuData.id ?
                    <TableContent // 현재 학생의 테이블 내용
                        selected={true}
                        nowstuData={props.nowstuData}
                        setnowstuData={props.setnowstuData}
                        student={student} key={student.id}  ></TableContent> : // selected 값을 참으로 전달
                    <TableContent // 나머지 테이블 내용
                        selected={false}
                        nowstuData={props.nowstuData}
                        setnowstuData={props.setnowstuData}
                        student={student} key={student.id}></TableContent> // selected는 거짓으로 전달
            )
        }
    );


    return (
        <div className={'Table'}>
            <TableHeader></TableHeader>
            {TableContents}
        </div>
    )
}


export default Table