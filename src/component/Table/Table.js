import './Table.css'
import TableHeader from './TableHeader/TableHeader';
import TableContent from './TableContent/TableContent';

const Table = (props) => {
    const TableContents =
         props.filteredData.map((student) => {
            return (
                student.id === props.nowstuData.id ?
                    <TableContent // 현재 학생의 테이블 내용
                        setname={props.setname} setgrade={props.setgrade}
                        setprofileImg={props.setprofileImg} backgroundColor={'#C4C4C4'} selected={1}
                        nowstuData={props.nowstuData}
                        setnowstuData={props.setnowstuData} changedData={props.changedData}
                        setchangedData={props.setchangedData}
                        student={student}></TableContent> : // 배경색 짙게(이 부분은 시행착오에 해당합니다. selected값에 맞게 css 수정하는 방식으로 코드는 짜여 있습니다.) , 그리고 selected 값을 참으로 전달
                    <TableContent // 나머지 테이블 내용
                        setname={props.setname} setgrade={props.setgrade}
                        setprofileImg={props.setprofileImg} backgroundColor={'#F8F8F8'} selected={0}
                        nowstuData={props.nowstuData}
                        setnowstuData={props.setnowstuData} changedData={props.changedData}
                        setchangedData={props.setchangedData}
                        student={student}></TableContent> // 배경색 옅게(이 부분은 시행착오에 해당합니다. selected값에 맞게 css 수정하는 방식으로 코드는 짜여 있습니다.), selected는 거짓으로 전달
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