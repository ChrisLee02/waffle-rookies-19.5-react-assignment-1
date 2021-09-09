import './DetailHeader.css'

const DetailHeader = (props) => {

    const checkValidity = (Data) => {
        const korean = /[가-힣]/;
        if (Data.name.length === 2 && korean.test(Data.name[0]) && korean.test(Data.name[1]) && (Number(Data.grade) === 1 || Number(Data.grade) === 2 || Number(Data.grade) === 3)) { //2글자, 한글, 학년조건 체크
            const tmp = props.stuData.filter(student => student.grade === Data.grade);
            const tmp2 = tmp.filter(student => student.name === Data.name); //학년, 이름으로 필터링
            if (tmp2.length===0) {
                props.modifyStudent(Data.id, Data); //학생 원본 데이터 수정
            } else {
                window.alert('한 학년에 동명이인이 있습니다.');
            }


        } else if (Data.name.length === 3 && korean.test(Data.name[0]) && korean.test(Data.name[1]) && korean.test(Data.name[2]) && ((Number(Data.grade) === 1) || (Number(Data.grade) === 2) || (Number(Data.grade) === 3))) { //3글자, 한글, 학년조건 체크
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
