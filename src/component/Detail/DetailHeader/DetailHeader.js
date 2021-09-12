import './DetailHeader.css'

const DetailHeader = (props) => {

    const checkValidity = (Data) => {
        const korean = /[가-힣]/;
        if ( /[가-힣]{2,3}/g.test(Data.name)  && ['1','2','3'].includes(Data.grade) ) { //2~3글자, 한글, 학년조건 체크
            const tmp = props.stuData.filter(student => student.grade === Data.grade);
            const tmp2 = tmp.filter(student => student.name === Data.name); //학년, 이름으로 필터링
            if (tmp2.length===0) {
                props.modifyStudent(Data.id, Data); //학생 원본 데이터 수정
            } else {
                window.alert('한 학년에 동명이인이 있습니다.');
            }


        } else { // 수정 조건에 안맞는 경우
            window.alert('이름은 한글 2~3글자, 학년은 1,2,3 중 하나로 수정할 수 있습니다.');
        }
    }

    return (
        <div className={'DetailHeader'}>
            <button onClick={() => { //수정 조건: 한글 2, 3글자 & 학년은 1, 2, 3중 하나
                checkValidity(props.nowstuData);
            }} id={'Save'}>저장
            </button>
            <button onClick={() => {
                props.setnowstuData({ // 현재 선택된 학생 데이터는 '없다'로 설정
                    id: Math.random(),
                    name: null,
                    grade: null,
                    profileImg: null
                });
                props.delStudent(props.nowstuData.id);
            }} id={'Delete'}>삭제
            </button>
        </div>
    )
}


export default DetailHeader;
