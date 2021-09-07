import './Detail.css'
import DetailHeader from "./DetailHeader/DetailHeader";
import DetailPic from "./DetailPic/DetailPic";
import DetailContent from "./DetailContent/DetailContent";

const Detail = (props) => {
    return (
        <div className={'Detail'}>
            <DetailHeader></DetailHeader>
            <DetailPic nowstuData={props.nowstuData}></DetailPic>
            <DetailContent nowstuData={props.nowstuData}></DetailContent>
        </div>
    )
}

export default Detail;