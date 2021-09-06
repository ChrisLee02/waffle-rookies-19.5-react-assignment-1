import './TableContent.css'

const TableHeader = () => {
    return (
        <div className={'TableHeader'}>
            <div className={'Text'} id={'Name'}>이름</div>
            <div className={'Text'} id={'Grade'}>학년</div>
        </div>

    )
}

export default TableHeader