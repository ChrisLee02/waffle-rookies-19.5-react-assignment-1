import Students from './Page/Students/Students';
import React, {useEffect} from 'react';
import {Route, BrowserRouter, Switch, Redirect, useHistory} from 'react-router-dom';
import StudentID from './Page/StudentID/StudentID';
import Login from './Page/Login/Login';
import axios from 'axios';
import {useStudentContext} from './context/StudentsContext';
import './App.css';
import {toast} from 'react-toastify';
import {useNetworkContext} from './context/NetworkContext';

function App() {
    const studentContext = useStudentContext();
    const networkContext = useNetworkContext();
    const history = useHistory();
    axios.defaults.baseURL =
        'https://g5imzjo8qf.execute-api.ap-northeast-2.amazonaws.com/v1';
    axios.defaults.headers['Authorization'] = 'Bearer ' + networkContext.token;

    useEffect(() => {
        if (networkContext.token !== undefined && networkContext.token !== 'null') {
            axios
                .get("/auth/check_token")
                .then((response)=>{
                    axios
                        .get('/student')
                        .then((response) => {
                            studentContext.setStudentData(response.data);
                        })
                        .catch((error) => {
                            toast.error(error.response.data.message);
                        });
                })
                .catch((error)=>{
                    localStorage.setItem("JWT", null);
                    networkContext.setToken(undefined);
                    toast(error.response.data.message);
                });
        }

    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/students/:id" component={StudentID} exact/>
                <Route path="/students" component={Students} exact/>
                <Route path="/login" component={Login} exact/>
                {networkContext.token === 'null' ||
                networkContext.token === undefined ? ( //로그인 안되었다면
                    <Redirect to={'/login'}/>
                ) : (
                    <Redirect to={'/students'}/>
                )}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
