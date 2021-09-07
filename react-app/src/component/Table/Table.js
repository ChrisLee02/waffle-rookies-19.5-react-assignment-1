import './Table.css'
import TableHeader from './TableHeader/TableHeader';
import TableContent from './TableContent/TableContent';

const Table = (props) => {
    const TableContents = props.stuData.map((student) => {
            return(
                student === props.nowstuData ?
                <TableContent backgroundColor={'#C4C4C4'} selected={1} nowstuData={props.nowstuData} setnowstuData={props.setnowstuData}
                              student={student}></TableContent> :
                <TableContent backgroundColor={'#F8F8F8'} selected={0} nowstuData={props.nowstuData} setnowstuData={props.setnowstuData}
                              student={student}></TableContent>
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