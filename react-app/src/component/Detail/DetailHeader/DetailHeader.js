import './DetailHeader.css'

const DetailHeader = (props) => {
    return (
        <div className={'DetailHeader'}>
            <button onClick={()=>{
                props.modifyStudent(props.changedData.id,props.changedData);
            }} id={'Save'}>저장</button>
            <button id={'Delete'}>삭제</button>
        </div>
    )
}


export default DetailHeader;
