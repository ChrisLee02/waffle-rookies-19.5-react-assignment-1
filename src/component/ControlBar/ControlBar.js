import './ControlBar.css';
import {toast} from 'react-toastify';
import {useState} from 'react';

const ControlBar = (props) => {
    const params = new URLSearchParams(document.location.search.substring(1));
    const [gradeSearch, setGradeSearch] = useState(params.get('grade'));
    const [nameSearch, setNameSearch] = useState(params.get('name'));
    return (
        <form className={'Search'}>
                <span className={'InputSearchWrap'}>
                    <input
                        value={nameSearch}
                        onChange={(e) => {
                            // 수정이 생기면
                            setNameSearch(e.target.value); // 내부 값 변경
                        }}
                        placeholder={'이름'}
                        type={'text'}
                        className={'InputSearch'}
                        name={'name'}
                    />
                    <input
                        value={gradeSearch}
                        onChange={(e) => {
                            // 수정이 생기면
                            if (['', '1', '2', '3'].includes(e.target.value)) {
                                setGradeSearch(e.target.value); // 내부 값 변경
                            } else {
                                toast('학년은 1, 2, 3 중 하나로 입력하세요');
                            }
                        }}
                        placeholder={'학년'}
                        type={'text'}
                        className={'InputSearch'}
                        name={'grade'}
                    />
                </span>
            <button type={'submit'}>검색</button>
        </form>
    );
};

export default ControlBar;
