import './ControlBar.css'
import {useState} from 'react';
import {useStudentContext} from '../../context/Context';

const ControlBar = (props) => {
    const context = useStudentContext();
    return (
        <div className={'ControlBar'}>
            <input value={context.search} onChange={e=>{ // 수정이 생기면
                context.setSearch(e.target.value); // 내부 값 변경
            }}
             placeholder={'검색'} type={'text'}/>
            <button onClick={props.openModal}>추가</button>
        </div>
    )
}

export default ControlBar

