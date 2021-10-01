import Students from "./Page/Students/Students";
import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import StudentID from "./Page/StudentID/StudentID";
import Login from "./Page/Login/Login";
import axios from "axios";
import { useStudentContext } from "./context/StudentsContext";
import "./App.css";
import { toast } from "react-toastify";
import {useNetworkContext} from './context/NetworkContext';

function App() {
  const studentContext = useStudentContext();
  const networkContext = useNetworkContext();

  useEffect(() => {
    networkContext.setIsLogIn(localStorage.getItem("isLogIn"));
    axios
      .get(networkContext.baseURL + "/student", networkContext.config)
      .then((response) => {
        studentContext.setStudentData(response.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }, [studentContext.nowStudentData]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/students/:id" component={StudentID} exact />
        <Route path="/students" component={Students} exact />
        <Route path="/login" component={Login} exact />
        {localStorage.getItem("isLogIn") === "true" ? ( //로그인 되었
          <Redirect to={"/students"} />
        ) : (
          <Redirect to={"/login"} />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
