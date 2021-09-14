import './DetailHeader.css'
import {useStudentContext} from '../../../context/Context';
import image from '../../../Data/Vector.svg'

const DetailHeader = () => {


    return (
        <div className={'DetailHeader'}>
            <div></div>
            <button id={'GoDetail'}><img src={image}/></button>
        </div>
    )
}


export default DetailHeader;
