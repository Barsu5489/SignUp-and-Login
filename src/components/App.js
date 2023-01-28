import React from 'react';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
// import Login from './Login';
// import Signup from './Signup';
// import Auth from './Auth';
import LoginPage from './LoginPage';
import Signup from './SignupPage';



function App() {
  return (

  <div>
<Signup/>
<LoginPage/>
  </div>
    
      //  <BrowserRouter>
      // <Routes>
      // <Route exact path="/login" element={<Login/>}/>
      //   <Route exact path="/signup" element={<Signup/>}/>
       
      // </Routes>
      // </BrowserRouter>
      
    
  );
}

export default App;
