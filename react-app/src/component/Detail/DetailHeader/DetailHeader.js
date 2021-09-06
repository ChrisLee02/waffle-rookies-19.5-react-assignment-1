import './DetailHeader.css'

const DetailHeader = () => {
    return (
        <div className={'DetailHeader'}>
            <button onClick={()=>{
                window.alert('dd');
            }} id={'Save'}>저장</button>
            <button id={'Delete'}>삭제</button>
        </div>
    )
}


export default DetailHeader;
