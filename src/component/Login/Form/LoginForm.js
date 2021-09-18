import './LoginForm.css'

const LoginForm = (props) => {
    return (

        <form className={'LoginForm'} action="" name={'IDPW'}>
            <label className={'LoginLabel'} htmlFor={"LogInID"}>Username or email address</label>
            <input id={'LogInID'} type="text"/>
            <label className={'LoginLabel'} htmlFor={"LogInPW"}>Password</label>
            <input id={'LogInPW'} type="text"/>
            <button onClick={() => {
                props.history.push('/students');
                localStorage.setItem('isLogIn', true);
            }} id={'SignIn'}>Sign in</button> {/**/}
        </form>


    )
}

export default LoginForm
