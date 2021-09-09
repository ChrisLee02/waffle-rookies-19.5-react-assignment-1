import './Detail.css'
import DetailHeader from './DetailHeader/DetailHeader';
import DetailPic from './DetailPic/DetailPic';
import DetailContent from './DetailContent/DetailContent';
import {useState} from 'react';


const Detail = (props) => {

    return (
        <div className={'Detail'}>
            <DetailHeader delfilteredStudent={props.delfilteredStudent} modifyfilteredStudent={props.modifyfilteredStudent} setfilteredData={props.setfilteredData} nowstuData={props.nowstuData} setnowstuData={props.setnowstuData} delStudent={props.delStudent} modifyStudent={props.modifyStudent} changedData={props.changedData}></DetailHeader>
            <DetailPic profileImg={props.profileImg} nowstuData={props.nowstuData}></DetailPic>
            <DetailContent name={props.name} grade={props.grade} profileImg={props.profileImg} setname={props.setname}
                           setgrade={props.setgrade}
                           setprofileImg={props.setprofileImg} changedData={props.changedData}
                           setchangedData={props.setchangedData}
                           nowstuData={props.nowstuData}></DetailContent>
        </div>
    )
}


export default Detail;