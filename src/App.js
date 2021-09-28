import Students from './Page/Students/Students';
import React, {useEffect, useState} from 'react';
import {Route, BrowserRouter, Switch, Redirect, useHistory, Link, Router, useParams} from 'react-router-dom'
import StudentID from './Page/StudentID/StudentID';
import Login from './Page/Login/Login';
import axios from 'axios';
import {useStudentContext} from './context/Context';

function App() {
    const context = useStudentContext();

    useEffect(() => {
        context.setIsLogIn(localStorage.getItem('isLogIn'));
        axios.get(context.baseURL + '/student', context.config).then((response)=>{
            console.log("Students 성공");
            context.setStudentData(response.data);
        })
            .catch((response)=>{
                console.log('씨발');
                console.log(context.config.headers);
            })
    },[])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/students/:id" component={StudentID} exact/>
                <Route path="/students" component={Students} exact/>
                <Route path="/login" component={Login} exact/>
                {localStorage.getItem('isLogIn') === 'true' ? //로그인 되었
                    <Redirect to={'/students'}/>
                    :
                    <Redirect to={'/login'}/>
                }
            </Switch>
        </BrowserRouter>
        /*<BrowserRouter>
            {context.isLogIn === 'true' ? //로그인 되었
                <Switch>
                    <Route path="/students/:id" component={StudentID} exact/>
                    <Route path="/students" component={Students} exact/>
                </Switch>
                :
                <Switch>
                    <Route path="/login" component={Login} exact/>
                </Switch>
            }

        </BrowserRouter>*/
    );
}


export default App;

