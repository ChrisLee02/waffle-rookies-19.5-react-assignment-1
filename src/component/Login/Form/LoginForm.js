import './LoginForm.css'
import {useHistory} from 'react-router-dom';

const LoginForm = () => {
    const history = useHistory();
    return (

        <form className={'LoginForm'} action="" name={'IDPW'}>
            <label className={'LoginLabel'} htmlFor={"LogInID"}>Username or email address</label>
            <input id={'LogInID'} type="text"/>
            <label className={'LoginLabel'} htmlFor={"LogInPW"}>Password</label>
            <input id={'LogInPW'} type="text"/>
            <button onClick={() => {
                history.push('/students');
                localStorage.setItem('isLogIn', true);
            }} id={'SignIn'}>Sign in</button> {/**/}
        </form>


    )
}

export default LoginForm
