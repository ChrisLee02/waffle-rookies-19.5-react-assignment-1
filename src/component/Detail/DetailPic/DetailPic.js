import './DetailPic.css'
import {useStudentContext} from '../../../context/Context';

const DetailPic = () => {
    const context = useStudentContext();
    return (
        <div className={'DetailPic'}>
            <img src={context.nowStudentData.profileImg} alt='이미지를 불러올 수 없습니다'
            width = {'100%'} height={'100%'} />
        </div>
    )
}


export default DetailPic

