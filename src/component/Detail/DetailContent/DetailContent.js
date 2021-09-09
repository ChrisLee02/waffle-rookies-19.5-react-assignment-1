import './DetailContent.css'
import {useState} from 'react';

const DetailContent = (props) => {

    return (
        <ul className={'DetailContent'}>
            <li className={'Line'} id={'Name'}>
                이름 <input className={'DetailInput'} value={props.name}
                          onChange={ e => {  // 수정이 생기면
                              props.setname(e.target.value); //input 내부 값도 맞춰서 수정
                              props.setchangedData( {...props.changedData, name:e.target.value} ); //수정될 학생 데이터도 변경
                          }}/>
            </li>
            <li className={'Line'} id={'Grade'}>
                학년 <input className={'DetailInput'} value={props.grade}
                          onChange={ e => {
                              props.setgrade(e.target.value);
                              props.setchangedData( {...props.changedData, grade:e.target.value});
                          }}/>
            </li>
            <li className={'Line'} id={'Profile'}>
                프로필 <input className={'DetailInput'} value={props.profileImg}
                           onChange={ (e) => {
                               props.setprofileImg(e.target.value);
                               props.setchangedData( {...props.changedData, profileImg:e.target.value});
                           } }/>
            </li>
        </ul>
    )
}

export default DetailContent