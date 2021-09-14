import Lock from '../../Data/Lock.svg';
import Delete from '../../Data/Delete.svg';
import Save from '../../Data/Save.svg';
import './Buttons.css'

const IDButtons = () => {
    return (
        <div className={'IDButtons'}>
            <button className={'IdButton Lock'}><img src={Lock}/>잠금</button>
            <button className={'IdButton Delete'}><img src={Delete}/> 삭제</button>
            <button className={'IdButton Save'}><img src={Save}/> 저장</button>
        </div>
    )
}

export default IDButtons

