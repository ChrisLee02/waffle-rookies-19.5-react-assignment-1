import './Detail.css'
import DetailHeader from './DetailHeader/DetailHeader';
import DetailPic from './DetailPic/DetailPic';
import DetailContent from './DetailContent/DetailContent';
import {useState} from 'react';

const Detail = (props) => {


    return (
        <div className={'Detail'}>
            <DetailHeader modifyStudent={props.modifyStudent} changedData={props.changedData}></DetailHeader>
            <DetailPic nowstuData={props.nowstuData}></DetailPic>
            <DetailContent name={props.name} grade={props.grade} profileImg={props.profileImg} setname={props.setname}
                           setgrade={props.setgrade}
                           setprofileImg={props.setprofileImg} changedData={props.changedData}
                           setchangedData={props.setchangedData}
                           nowstuData={props.nowstuData}></DetailContent>
        </div>
    )
}

/*name={name} grade={grade} profileImg={profileImg} setname={setname} setgrade={setgrade}
setprofileImg={setprofileImg}*/

export default Detail;