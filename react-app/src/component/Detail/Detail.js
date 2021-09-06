import './Detail.css'
import DetailHeader from "./DetailHeader/DetailHeader";
import DetailPic from "./DetailPic/DetailPic";
import DetailContent from "./DetailContent/DetailContent";

const Detail = () => {
    return (
        <div className={'Detail'}>
            <DetailHeader></DetailHeader>
            <DetailPic></DetailPic>
            <DetailContent></DetailContent>
        </div>
    )
}

export default Detail;