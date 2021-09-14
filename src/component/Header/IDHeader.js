import './IDHeader.css'
import Arrow2 from '../../Data/Arrow2.svg'

const IDHeader = () => {
    return (
        <header className={'IDHeader'}>
            <div className={'Back'}>
                <img id={'Arrow'} src={Arrow2} height={"16px"} width={"16px"}/>학생 목록 페이지로
            </div>
        </header>
    )
}

export default IDHeader