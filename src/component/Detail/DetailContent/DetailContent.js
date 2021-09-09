import './DetailContent.css'
import {useState} from 'react';

const DetailContent = (props) => {

    return (
        <ul className={'DetailContent'}>
            <li className={'Line'} id={'Name'}>
                이름 <input className={'DetailInput'} value={props.nowstuData.name}
                          onChange={(e) => {  // 수정이 생기면
                              props.setnowstuData({...props.nowstuData, name: e.target.value}); //input 내부 값도 맞춰서 수정
                              //수정될 학생 데이터도 변경
                          }}/>
            </li>
            <li className={'Line'} id={'Grade'}>
                학년 <input className={'DetailInput'} value={props.nowstuData.grade}
                          onChange={(e) => {  // 수정이 생기면
                              props.setnowstuData({...props.nowstuData, grade: e.target.value}); //input 내부 값도 맞춰서 수정
                              //수정될 학생 데이터도 변경
                          }}/>
            </li>
            <li className={'Line'} id={'Profile'}>
                프로필 <input className={'DetailInput'} value={props.nowstuData.profileImg}
                           onChange={(e) => {  // 수정이 생기면
                               props.setnowstuData({...props.nowstuData, profileImg: e.target.value}); //input 내부 값도 맞춰서 수정
                               //수정될 학생 데이터도 변경
                           }}/>
            </li>
        </ul>
    )
}

export default DetailContent