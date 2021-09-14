import './Detail.css'
import DetailHeader from './DetailHeader/DetailHeader';
import DetailPic from './DetailPic/DetailPic';
import DetailContent from './DetailContent/DetailContent';

const Detail = (props) => {

    return (
        <div className={'Detail'}>
            <DetailHeader history={props.history}/>
            <DetailPic/>
            <DetailContent/>
        </div>
    )
}


export default Detail;