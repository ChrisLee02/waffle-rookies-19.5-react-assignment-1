import './ControlBar.css'
import {useState} from 'react';

const ControlBar = (props) => {
    const [value, setvalue] = useState(props.search);

    return (
        <div className={'ControlBar'}>
            <input value={value} onChange={e=>{
                setvalue(e.target.value);
                props.filterStudent(e.target.value);
            }}
             placeholder={'검색'} type={'text'}/>
            <button onClick={props.raiseModal}>추가</button>
        </div>
    )
}

export default ControlBar

