import './DetailHeader.css'

const DetailHeader = (props) => {
    return (
        <div className={'DetailHeader'}>
            <button onClick={()=>{
                props.modifyStudent(props.changedData.id,props.changedData);
            }} id={'Save'}>저장</button>
            <button onClick={()=>{
                props.setnowstuData({ // 현재 선택된 학생 데이터는 '없다'로 설정
                    key: Math.random(),
                    name: null,
                    grade: null,
                    profileImg: null
                });
                props.delStudent(props.nowstuData.id);  // 이 구문까지 실행된 후에 nowstuData의 실제 갱신이 일어남.
            }} id={'Delete'}>삭제</button>
        </div>
    )
}


export default DetailHeader;
