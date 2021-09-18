import Students from './Page/Students/Students';
import React, {useEffect} from 'react';
import {Route, BrowserRouter, Switch, Redirect, useParams} from 'react-router-dom'
import {useStudentContext} from './context/Context';
import StudentID from './Page/StudentID/StudentID';
import Login from './Page/Login/Login';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} exact />
                <Route path='/students/:id' component={StudentID} exact />
                <Route path='/students' component={Students} exact />
                {localStorage.getItem('isLogIn') === 'true'  ?
                    <Redirect to={'/students'}/>
                    :
                    <Redirect to={'/login'} /> }
            </Switch>
        </BrowserRouter>
    );
}


export default App;

