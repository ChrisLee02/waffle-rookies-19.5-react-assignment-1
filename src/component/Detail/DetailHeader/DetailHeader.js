import './DetailHeader.css'
import ReactDOM from 'react-dom';

const DetailHeader = (props) => {
    return (
        <div className={'DetailHeader'}>
            <button onClick={() => { //수정 조건: 한글 2, 3글자 & 학년은 1, 2, 3중 하나
                const korean = /[가-힣]/;
                if (props.changedData.name.length === 2 && korean.test(props.changedData.name[0]) && korean.test(props.changedData.name[1]) && (props.changedData.grade === 1 || props.changedData.grade === 2 || props.changedData.grade === 3)) { //2글자, 한글, 학년조건 체크
                    props.modifyStudent(props.changedData.id, props.changedData); //학생 원본 데이터 수정
                    props.modifyfilteredStudent(props.changedData.id, props.changedData); // 리스트에도 바로 반영되도록

                } else if (props.changedData.name.length === 3 && korean.test(props.changedData.name[0]) && korean.test(props.changedData.name[1]) && korean.test(props.changedData.name[2]) && ( (Number(props.changedData.grade) === 1) || (Number(props.changedData.grade) === 2) || (Number(props.changedData.grade) === 3) ) ) { //3글자, 한글, 학년조건 체크
                    props.modifyStudent(props.changedData.id, props.changedData);
                    props.modifyfilteredStudent(props.changedData.id, props.changedData);

                } else { // 수정 조건에 안맞는 경우
                    window.alert('이름은 한글 2~3글자, 학년은 1,2,3 중 하나로 수정할 수 있습니다.');
                }
            }} id={'Save'}>저장
            </button>
            <button onClick={() => {
                props.setnowstuData({ // 현재 선택된 학생 데이터는 '없다'로 설정
                    key: Math.random(),
                    name: null,
                    grade: null,
                    profileImg: null
                });
                props.delStudent(props.nowstuData.id);  // 다음 구문까지 실행된 후에 nowstuData의 실제 갱신이 일어남.
                props.delfilteredStudent(props.nowstuData.id); // 따라서 이 부분은 멀쩡히 동작함.
            }} id={'Delete'}>삭제
            </button>
        </div>
    )
}


export default DetailHeader;