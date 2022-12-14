import React from "react"
import { Container } from "react-bootstrap";
import AuthProvider from "../context/AuthContext";
import Signup from "./Signup"
import Dashboard from "./Dashboard";
import Login from "./Login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
  
    <Container 
    className="d-flex align-items-center justify-content-center" 
    style={{minHeight:"100vh"}}
    >
      <div className="w-100" style={{maxWidth:"400px"}}>
        <Router>
          <AuthProvider>
           <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path= "/" component={Dashboard} />
            <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
          </Router>
        
        </div>
    
    </Container>
   
    
  )
}

export default App;
