import './DetailHeader.css'

const DetailHeader = (props) => {
    return (
        <div className={'DetailHeader'}>
            <button onClick={()=>{ //수정 조건: 한글 2, 3글자 & 학년은 1, 2, 3중 하나
                const korean = /[가-힣]/;
                if( (1<props.changedData.name.length<4) && korean.test(props.changedData.name[0]) && korean.test(props.changedData.name[0]) &&  (props.changedData.grade === 1 || props.changedData.grade === 2 || props.changedData.grade === 3 )  ) {
                    props.modifyStudent(props.changedData.id,props.changedData);
                } else{
                    window.alert('이름은 한글 2~3글자, 학년은 1,2,3 중 하나로 수정할 수 있습니다.');
                }

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
