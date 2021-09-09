import './Detail.css'
import DetailHeader from './DetailHeader/DetailHeader';
import DetailPic from './DetailPic/DetailPic';
import DetailContent from './DetailContent/DetailContent';
import {useState} from 'react';


const Detail = (props) => {

    return (
        <div className={'Detail'}>
            <DetailHeader stuData={props.stuData} nowstuData={props.nowstuData} setnowstuData={props.setnowstuData} delStudent={props.delStudent} modifyStudent={props.modifyStudent} ></DetailHeader>
            <DetailPic nowstuData={props.nowstuData}></DetailPic>
            <DetailContent setnowstuData={props.setnowstuData} nowstuData={props.nowstuData}></DetailContent>
        </div>
    )
}


export default Detail;