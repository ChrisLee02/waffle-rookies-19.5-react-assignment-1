import './DetailPic.css'

const DetailPic = (props) => {
    return (
        <div className={'DetailPic'}>
            <img src={props.profileImg} alt='이미지를 불러올 수 없습니다'
            width = {'100%'} height={'100%'} />
        </div>
    )
}


export default DetailPic

