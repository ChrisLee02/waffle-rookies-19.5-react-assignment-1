import './DetailContent.css'
import {useState} from 'react';

const DetailContent = (props) => {
    const [name, setname] = useState(props.nowstuData.name);
    const [grade, setgrade] = useState(props.nowstuData.grade);
    const [profileImg, setprofileImg] = useState(props.nowstuData.profileImg);

    return (
        <ul className={'DetailContent'}>
            <li className={'Line'} id={'Name'}>
                이름 <input className={'DetailInput'} value={name}
                          onChange={ e => {
                              setname(e.target.value);
                              props.setchangedData( {...props.changedData, name:e.target.value} );
                          }}/>
            </li>
            <li className={'Line'} id={'Grade'}>
                학년 <input className={'DetailInput'} value={grade}
                          onChange={ e => {
                              props.setgrade(e.target.value);
                              props.setchangedData( {...props.changedData, grade:e.target.value});
                          }}/>
            </li>
            <li className={'Line'} id={'Profile'}>
                프로필 <input className={'DetailInput'} value={profileImg}
                           onChange={ (e) => {
                               props.setprofileImg(e.target.value);
                               props.setchangedData( {...props.changedData, profileImg:e.target.value});
                           } }/>
            </li>
        </ul>
    )
}

export default DetailContent