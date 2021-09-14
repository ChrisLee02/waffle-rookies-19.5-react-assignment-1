import './DetailContent.css'
import {useState} from 'react';
import {useStudentContext} from '../../../context/Context';

const DetailContent = () => {
    const context = useStudentContext();
    return (
        <ul className={'DetailContent'}>
            <li className={'Line'}>
                이름 <input className={'DetailInput'} value={context.nowStudentData.name}
                          onChange={(e) => {  // 수정이 생기면
                              context.setNowStudentData({...context.nowStudentData, name: e.target.value}); //input 내부 값도 맞춰서 수정
                              //수정될 학생 데이터도 변경
                          }}/>
            </li>
            <li className={'Line'}>
                학년 <input className={'DetailInput'} value={context.nowStudentData.grade}
                          onChange={(e) => {  // 수정이 생기면
                              context.setNowStudentData({...context.nowStudentData, grade: e.target.value}); //input 내부 값도 맞춰서 수정
                              //수정될 학생 데이터도 변경
                          }}/>
            </li>
        </ul>
    )
}

export default DetailContent