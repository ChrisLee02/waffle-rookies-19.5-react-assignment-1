import './LoginForm.css'

const LoginForm = () => {
    return (

        <form className={'LoginForm'} action="" name={'IDPW'}>
            <label className={'LoginLabel'} htmlFor={"LogInID"}>Username or email address</label>
            <input id={'LogInID'} type="text"/>
            <label className={'LoginLabel'} htmlFor={"LogInPW"}>Password</label>
            <input id={'LogInPW'} type="text"/>
            <button  id={'SignIn'}>Sign in</button>
        </form>


    )
}

export default LoginForm
