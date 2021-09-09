import './ControlBar.css'
import {useState} from 'react';

const ControlBar = (props) => {
    const [value, setvalue] = useState(props.search);

    return (
        <div className={'ControlBar'}>
            <input value={value} onChange={e=>{ // 수정이 생기면
                setvalue(e.target.value); // 내부 값 변경
                props.filterStudent(e.target.value); //리스트에 표시될 학생 필터링
            }}
             placeholder={'검색'} type={'text'}/>
            <button onClick={props.openModal}>추가</button>
        </div>
    )
}

export default ControlBar

