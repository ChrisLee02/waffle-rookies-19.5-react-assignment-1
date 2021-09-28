import './LoginForm.css'
import {useHistory, Link} from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import {useStudentContext} from '../../../context/Context';

const LoginForm = () => {
    const context = useStudentContext();
    const [account, setAccount] = useState({
        "username": '',
        "password": ''
    });
    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value // 귀찮으니까...
        });
    };
    const history = useHistory();
    return (

        <form className={'LoginForm'} action="" name={'IDPW'}>
            <label className={'LoginLabel'} htmlFor={"LogInID"}>Username or email address</label>
            <input name={"username"} id={'LogInID'} type="text" onChange={onChangeAccount} />
            <label className={'LoginLabel'} htmlFor={"LogInPW"}>Password</label>
            <input name={"password"} id={'LogInPW'} type="password" onChange={onChangeAccount} />
            <button type={'button'} onClick={() => {
                axios.post('https://p04fpgjlo3.execute-api.ap-northeast-2.amazonaws.com/v1/auth/login', account).then((response)=>{
                    console.log('성공');
                    localStorage.setItem('JWT', response.data.access_token);
                    localStorage.setItem('isLogIn', true);
                    context.setIsLogIn('true');
                    history.push('/students');
                })
                    .catch((response)=>{
                        window.alert(response.message);
                    })
            }} id={'SignIn'}>Sign in</button>
        </form>


    )
}

export default LoginForm
