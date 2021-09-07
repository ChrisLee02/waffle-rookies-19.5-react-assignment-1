import './ControlBar.css'

const ControlBar = (props) => {

    return (
        <div className={'ControlBar'}>
            <input placeholder={'검색'} type={'text'}/>
            <button onClick={props.raiseModal}>추가</button>
        </div>
    )
}

export default ControlBar

