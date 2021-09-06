import './Table.css'
import TableHeader from "./TableHeader/TableHeader";
import TableContent from "./TableContent/TableContent";

const Table = () => {
    return (
        <div className={'Table'}>
            <TableHeader></TableHeader>
            <TableContent></TableContent>
        </div>
    )
}


export default Table