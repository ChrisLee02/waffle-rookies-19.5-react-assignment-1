import './Login.css'
import LoginHeader from '../../component/Login/Header/LoginHeader';
import LoginForm from '../../component/Login/Form/LoginForm';

const Login = () => {
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
