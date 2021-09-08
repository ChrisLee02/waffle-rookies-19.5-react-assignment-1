import './ControlBar.css'
import {useState} from 'react';

const ControlBar = (props) => {


    return (
        <div className={'ControlBar'}>
            <input onChange={e=>{
                props.filterStudent(e.target.value);
            }}
             placeholder={'검색'} type={'text'}/>
            <button onClick={props.raiseModal}>추가</button>
        </div>
    )
}

export default ControlBar

