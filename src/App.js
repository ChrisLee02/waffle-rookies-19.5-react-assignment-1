import Students from './Page/Students/Students';
import React from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import {useStudentContext} from './context/Context';
import StudentID from './Page/StudentID/StudentID';
import Login from './Page/Login/Login';

function App() {
    const context = useStudentContext();

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/students' component={Students} exact />
                <Route path='/login' component={Login} exact />
                <Route path='/students/:id' component={StudentID} exact />
                <Redirect to='/students'/>
            </Switch>
        </BrowserRouter>
    );
}


export default App;

