import './Detail.css'
import DetailHeader from "./DetailHeader/DetailHeader";
import DetailPic from "./DetailPic/DetailPic";

const Detail = () => {
    return (
        <div className={'Detail'}>
            <DetailHeader></DetailHeader>
            <DetailPic></DetailPic>
        </div>
    )
}

export default Detail;