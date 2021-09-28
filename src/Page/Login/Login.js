import './Login.css'
import LoginHeader from '../../component/Login/Header/LoginHeader';
import LoginForm from '../../component/Login/Form/LoginForm';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
const Login = () => {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('isLogIn') !== 'true') {
            history.push('/login');
        }
    },[])
    return (
        <div className={'Login'}>
            <LoginHeader></LoginHeader>
            <LoginForm></LoginForm>
            <p className={'LoginFoot'}>
                New to Waffle?
                <a href="">Create an account</a>.
            </p>
        </div>
    )
}

export default Login
