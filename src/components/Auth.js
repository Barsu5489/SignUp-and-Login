//import logo from './logo.svg';
import './App.css';

import LoginPage from './LoginPage';
import Home from './Home';
import Signup from './SignupPage';
import Test from './Test';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function Auth() {

 

  return (

    <BrowserRouter>
    <Routes>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path = '/home' element= {<Test/>}/>
    </Routes>
    </BrowserRouter>
    // <div className='App'>
    //   {
    //     currentForm === 'login'? <LoginPage onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm}/>
    //   }
      

    // </div>
  );
}

export default Auth;
