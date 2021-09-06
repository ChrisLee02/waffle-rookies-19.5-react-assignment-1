import './DetailContent.css'

const DetailContent = () => {
    return (
        <ul className={'DetailContent'}>
            <li className={'Line'} id={'Name'}>
                이름 <input className={'DetailInput'} type={'Text'}  value='이와플'/>
            </li>
            <li className={'Line'} id={'Grade'}>
                학년 <input className={'DetailInput'} type={'Text'} value='3'/>
            </li>
            <li className={'Line'} id={'Profile'}>
                프로필 <input className={'DetailInput'} type={'Text'} value='https://github.githubassets.com/images/modules/logos_page/Octocat.png'/>
            </li>
        </ul>
    )
}

export default DetailContent