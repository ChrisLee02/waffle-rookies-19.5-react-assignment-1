import './DetailContent.css'
import {useState} from 'react';
import {useStudentContext} from '../../../context/Context';

const DetailContent = () => {
    const context = useStudentContext();
    return (
        <ul className={'DetailContent'}>
            <li className={'Line'}>
                이름 <input disabled={true} className={'DetailInput'} value={context.nowStudentData.name}/>
            </li>
            <li className={'Line'}>
                학년 <input disabled={true} className={'DetailInput'} value={context.nowStudentData.grade}/>
            </li>
        </ul>
    )
}

export default DetailContent