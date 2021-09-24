import Students from './Page/Students/Students';
import React from 'react';
import {Route, BrowserRouter, Switch, Redirect, useParams} from 'react-router-dom'
import StudentID from './Page/StudentID/StudentID';
import Login from './Page/Login/Login';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/students/:id" component={StudentID} exact/>
                <Route path="/students" component={Students} exact/>
                {localStorage.getItem('isLogIn') === 'true' ? //로그인 되었
                    <Redirect to={'/students'}/>
                    :
                    <Redirect to={'/login'}/>
                }
            </Switch>
            <Route path="/login" component={Login} exact/>
        </BrowserRouter>
    );
}


export default App;

