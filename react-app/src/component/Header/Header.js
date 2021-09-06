import './Header.css'
import Waffle from './Waffle.svg'

const Header = () => {
    return (
        <header className={'Header'}>
            <a href={"https://wafflestudio.com"} target={"_blank"}>
                <img src={Waffle} height={"58"} width={"54"}/>
            </a>
            <h1>와플고등학교 명단 관리 프로그램</h1>
        </header>
    )
}

export default Header