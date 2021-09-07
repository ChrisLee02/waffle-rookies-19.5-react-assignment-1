import './DetailContent.css'

const DetailContent = (props) => {
    return (
        <ul className={'DetailContent'}>
            <li className={'Line'} id={'Name'}>
                이름 <input className={'DetailInput'} type={'Text'}  value={props.nowstuData.name}/>
            </li>
            <li className={'Line'} id={'Grade'}>
                학년 <input className={'DetailInput'} type={'Text'} value={props.nowstuData.grade}/>
            </li>
            <li className={'Line'} id={'Profile'}>
                프로필 <input className={'DetailInput'} type={'Text'} value={props.nowstuData.profileImg}/>
            </li>
        </ul>
    )
}

export default DetailContent