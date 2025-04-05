import React, { useState } from 'react';
//import ThemeToggle from './components/ThemeToggle';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Functional from './components/Functional';
import Class from './components/Class';
import Props from './components/props';
import Profile1 from './components/Profile1';
import Myform from './components/events';
import Conditions from './components/Conditions';
import NumberLists from './components/lists';
import Filter from './components/filter';
import Hooks from './components/hooks';
import './App.css';
import './index.css'
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import users from './data/data';  
import Keys from './components/keys';
import InfiniteLoopCounter  from './components/hooks1';
import Controlled from './components/Controlled';
import UnControlled from './components/UnControlled';
import FormValid from './components/FormValidation';
function App() {
  const passdata=[2,3,4,5,6,6,66,6];
  const [addNumb,setNum]=useState([10,20,30]);
  const addnumb=()=>{
           const nextNumb=addNumb.length>0?addNumb[addNumb.length-1]+10:10;
           setNum([...addNumb,nextNumb]);
  }
  const remnumb=()=>{
    const updatedNumbers = addNumb.slice(0, addNumb.length - 1);

  
    setNum(updatedNumbers);
  }
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
          </ul>
        </nav>
        <hr/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
           <Welcome/>
           <Profile/>
           <Functional/>
           <Class/>
           <Props isLoggedIn={true} name="bob"/>
           <Profile1/>
           <Myform/>
           <Conditions isLoggedIn={true}/>
           <NumberLists numbers={addNumb}/>
              <button onClick={addnumb}>Add number</button>
              <button onClick={remnumb}>Remove number</button>
              <Keys user={users}/>
              <Filter numbers={[1,2,3,4,5,6,7,8,9]}/>
              <Hooks/>
            {/* <InfiniteLoopCounter /> */} 
            <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
    <Controlled/>
    <UnControlled/>
    <FormValid/>
    </div>
  );
}

export default App;